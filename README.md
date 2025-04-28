# Tip Calculator Tool

A comprehensive platform providing specialized tip calculators for various service industries, location-specific tipping guidance, and educational content about global tipping customs.

## 🚀 Live Demo

[Tip Calculator Tool](https://tipcalculator.cash)

## 📋 Features

- **50+ Specialized Tip Calculators**: Restaurant, hotel, transportation, personal services, and more
- **Location-Specific Guidance**: Custom tipping recommendations based on global locations
- **SEO Optimized**: Enhanced metadata, JSON-LD schema, and performance optimization
- **Fast Performance**: Static site generation with client-side interactivity
- **Mobile-First Design**: Responsive layouts for all device sizes
- **PWA Support**: Installable Progressive Web App for offline use
- **Dark Mode**: Automatic and manual theme switching

## 🛠️ Tech Stack

- **Next.js 15.2.4**: App Router, Static Site Generation
- **React 19**: Client-side interactivity with partial hydration
- **TypeScript**: Type-safe codebase
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Accessible, customizable component library
- **Firebase Hosting**: Global CDN distribution

## 📁 Project Structure

```
tip-calculator-hub/
├── app/                  # Next.js App Router pages
├── components/           # React components (Atomic Design)
│   ├── atoms/            # Basic UI elements
│   ├── molecules/        # Simple combinations
│   ├── organisms/        # Complex components
│   ├── templates/        # Page layouts
│   ├── layout/           # Site-wide layouts
│   └── ui/               # shadcn/ui components
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and data
│   ├── data.ts           # Calculator and location data
│   ├── metadata.ts       # SEO metadata management
│   ├── schema.ts         # JSON-LD schema generators
│   ├── web-vitals.ts     # Performance monitoring
│   └── affiliate-links.ts # Affiliate link utilities
├── public/               # Static assets
│   ├── icons/            # PWA and favicon icons
│   ├── images/           # Site images
│   └── manifest.json     # PWA manifest
└── scripts/              # Build utilities
    ├── gen-sitemap.ts    # Sitemap/robots.txt generator
    └── optimize-images.ts # Image optimization
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm (pnpm recommended)
- Firebase CLI (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-organization/tip-calculator-hub.git
   cd tip-calculator-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build and Export

To create a production build:

```bash
npm run build
# or
pnpm build
```

The static export will be generated in the `out` directory.

## 🔥 Firebase Deployment

### Initial Setup

1. **Install Firebase CLI** (if not already installed)
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase** (first-time only)
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project
   - Specify `out` as your public directory
   - Configure as a single-page app: `No`
   - Set up automatic builds and deploys: `No`

### Deployment

1. **Build the project**
   ```bash
   npm run build
   # or
   pnpm build
   ```

2. **Deploy to Firebase**
   ```bash
   firebase deploy --only hosting
   ```

## 🧰 Development Workflow

### Adding a New Calculator

1. Add the calculator definition to `lib/data.ts`
2. Add metadata in `lib/metadata.ts`
3. Add any calculator-specific logic if needed
4. Run the development server to test

### Adding Location Support

1. Add the location definition to `lib/data.ts`
2. Add metadata in `lib/metadata.ts` for the location pages
3. Run the development server to test

### Optimizing Images

1. Place source images in the `public` directory
2. Run the image optimization script:
   ```bash
   npx tsx scripts/optimize-images.ts
   ```

### Updating the Sitemap

The sitemap is generated automatically during build, but you can run it manually:

```bash
npx tsx scripts/gen-sitemap.ts
```

## 📊 Performance Monitoring

This project includes Core Web Vitals monitoring via `lib/web-vitals.ts`. Performance metrics are logged to the console in development and can be configured to send to an analytics endpoint in production.

## 🧪 Lighthouse Scores

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 📱 PWA Support

This project includes Progressive Web App support:

- Installable on mobile and desktop
- Offline functionality
- App icons and splash screens
- Web App Manifest

## 🔄 Continuous Integration

For CI/CD, you can use GitHub Actions to automate the build and deployment process. A sample workflow is included in `.github/workflows/`.

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.