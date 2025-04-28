/**
 * Image Optimization Script
 * 
 * This script optimizes images in the public directory to improve performance.
 * It processes PNG, JPG, and SVG files, resizing and compressing them as needed.
 * 
 * Usage:
 * - Install dependencies: npm install sharp svgo globby
 * - Run: npx tsx scripts/optimize-images.ts
 */

import fs from 'fs';
import path from 'path';
import { globby } from 'globby';
import sharp from 'sharp';
import { optimize } from 'svgo';
import { execSync } from 'child_process';

// Config
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SIZES = [2048, 1024, 768, 640, 384, 256];
const QUALITY = 80;

// Check if required packages are installed
try {
  require.resolve('sharp');
  require.resolve('svgo');
  require.resolve('globby');
} catch (error) {
  console.error('Required dependencies not installed.');
  console.error('Please run: npm install sharp svgo globby');
  process.exit(1);
}

// Create images directory if it doesn't exist
async function ensureDirectories() {
  const dirs = [
    path.join(PUBLIC_DIR, 'images'),
    path.join(PUBLIC_DIR, 'icons'),
    path.join(PUBLIC_DIR, 'screenshots')
  ];
  
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  }
}

// Process a bitmap image (PNG or JPG)
async function processBitmapImage(filePath: string) {
  console.log(`Processing: ${filePath}`);
  const parsedPath = path.parse(filePath);
  const filename = parsedPath.name;
  const outputDir = path.dirname(filePath);
  
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Skip if image is already optimized
    if (filePath.includes('-optimized')) {
      console.log(`Skipping already optimized image: ${filePath}`);
      return;
    }
    
    // Generate responsive versions
    for (const size of SIZES) {
      // Only resize if original is larger than target size
      if (!metadata.width || metadata.width <= size) continue;
      
      const outputPath = path.join(
        outputDir, 
        `${filename}-${size}${parsedPath.ext}`
      );
      
      await image
        .resize(size)
        .jpeg({ quality: QUALITY, progressive: true })
        .toFile(outputPath);
      
      console.log(`Created: ${outputPath}`);
    }
    
    // Create WebP version
    const webpPath = path.join(outputDir, `${filename}.webp`);
    await image
      .webp({ quality: QUALITY })
      .toFile(webpPath);
    
    console.log(`Created WebP: ${webpPath}`);
    
    // Create AVIF version (if original is large enough to warrant it)
    if (metadata.width && metadata.width >= 640) {
      const avifPath = path.join(outputDir, `${filename}.avif`);
      await image
        .avif({ quality: QUALITY - 10 }) // AVIF can use lower quality settings
        .toFile(avifPath);
      
      console.log(`Created AVIF: ${avifPath}`);
    }
    
    // Optimize original
    const optimizedPath = path.join(
      outputDir,
      `${filename}-optimized${parsedPath.ext}`
    );
    
    await image
      .jpeg({ quality: QUALITY, progressive: true })
      .toFile(optimizedPath);
    
    console.log(`Optimized original: ${optimizedPath}`);
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Process SVG files
async function processSvgFile(filePath: string) {
  console.log(`Processing SVG: ${filePath}`);
  
  try {
    // Skip if already optimized
    if (filePath.includes('-optimized')) {
      console.log(`Skipping already optimized SVG: ${filePath}`);
      return;
    }
    
    const svgContent = fs.readFileSync(filePath, 'utf8');
    const result = optimize(svgContent, {
      multipass: true,
      plugins: [
        'preset-default',
        'removeDimensions',
        'removeViewBox',
        'cleanupIDs',
        'removeRasterImages',
        'removeUselessDefs'
      ]
    });
    
    const parsedPath = path.parse(filePath);
    const optimizedPath = path.join(
      path.dirname(filePath),
      `${parsedPath.name}-optimized.svg`
    );
    
    fs.writeFileSync(optimizedPath, result.data);
    console.log(`Optimized SVG: ${optimizedPath}`);
    
  } catch (error) {
    console.error(`Error processing SVG ${filePath}:`, error);
  }
}

// Generate PWA icons using sharp
async function generatePwaIcons() {
  console.log('Generating PWA icons...');
  
  const sourceIcon = path.join(PUBLIC_DIR, 'placeholder-logo.png');
  if (!fs.existsSync(sourceIcon)) {
    console.warn(`Source icon not found: ${sourceIcon}`);
    console.warn('Skipping PWA icon generation');
    return;
  }
  
  const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];
  const iconsDir = path.join(PUBLIC_DIR, 'icons');
  
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }
  
  for (const size of iconSizes) {
    const outputPath = path.join(iconsDir, `icon-${size}x${size}.png`);
    
    try {
      await sharp(sourceIcon)
        .resize(size, size)
        .png({ progressive: true })
        .toFile(outputPath);
      
      console.log(`Generated icon: ${outputPath}`);
    } catch (error) {
      console.error(`Error generating icon ${outputPath}:`, error);
    }
  }
}

// Main function
async function main() {
  try {
    console.log('Starting image optimization...');
    await ensureDirectories();
    
    // Find all images
    const imagePatterns = [
      path.join(PUBLIC_DIR, '**/*.{jpg,jpeg,png}'),
      path.join(PUBLIC_DIR, '**/*.svg'),
      `!${path.join(PUBLIC_DIR, 'node_modules/**')}`,
      `!${path.join(PUBLIC_DIR, '**/*-optimized.*')}`, // Skip already optimized
    ];
    
    const imagePaths = await globby(imagePatterns);
    console.log(`Found ${imagePaths.length} images to process.`);
    
    // Process bitmap images
    const bitmapImages = imagePaths.filter(
      path => /\.(jpg|jpeg|png)$/i.test(path)
    );
    for (const imagePath of bitmapImages) {
      await processBitmapImage(imagePath);
    }
    
    // Process SVG files
    const svgFiles = imagePaths.filter(path => /\.svg$/i.test(path));
    for (const svgPath of svgFiles) {
      await processSvgFile(svgPath);
    }
    
    // Generate PWA icons
    await generatePwaIcons();
    
    console.log('Image optimization completed successfully!');
  } catch (error) {
    console.error('Error during image optimization:', error);
    process.exit(1);
  }
}

// Run the script if executed directly
if (require.main === module) {
  main().catch(console.error);
}

export { main as optimizeImages }; 