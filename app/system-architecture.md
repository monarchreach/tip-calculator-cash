
# system-architecture.md

```markdown
# Tip Calculator Tool - System Architecture

## High-Level Architecture Diagram


The Tip Calculator Tool is a fully static site built with Next.js using Static Site Generation (SSG). All pages are pre-rendered at build time and served from a CDN. The calculator functionality runs entirely client-side using React and JavaScript.

## Component Interaction Flow

### Page Loading Flow
1. User requests a page from the CDN
2. Pre-rendered HTML is delivered to the browser
3. React hydrates the page, making interactive components functional
4. Client-side JavaScript initializes calculator functionality

### Calculator Interaction Flow
1. User enters bill amount in calculator form
2. Input is debounced to prevent excessive calculations
3. Tip percentage is selected (preset buttons or custom slider)
4. Optional settings are applied (split count, pre-tax calculation)
5. Calculator component computes and displays results in real-time

### Navigation Flow
1. User navigates using internal links
2. Next.js handles client-side navigation without full page reloads
3. New page content is displayed
4. Analytics event is triggered for page view

## External Services/APIs Used

### Google Analytics
- Used for tracking page views and user interactions
- Implemented via the `components/analytics.tsx` component
- Requires `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable

### CDN/Hosting
- Static files served from a CDN (Vercel, Netlify, or similar)
- No server-side processing required after deployment

## Build and Deployment Pipeline

### Development Workflow
1. Local development using `npm run dev`
2. Code changes with hot module reloading
3. Component testing in development environment

### Build Process
1. `npm run build` triggers Next.js build process
2. Pages are statically generated with `output: 'export'`
3. Static HTML, CSS, and JavaScript files are created in `out` directory
4. `scripts/gen-sitemap.ts` generates sitemap.xml and robots.txt

### Deployment Flow
1. Static files from `out` directory are uploaded to hosting provider
2. CDN distributes files globally
3. DNS directs users to CDN endpoints

## Security Measures

### Content Security
- Static site architecture minimizes attack vectors
- No server-side processing or database reduces security risks

### Data Handling
- All calculations performed client-side
- No user data stored or transmitted
- No cookies required for core functionality

### External Resources
- Placeholder images served from internal sources
- Google Analytics is the only external script

## Scalability Considerations

### Content Scalability
- Adding new calculators requires only data updates in `lib/data.ts`
- Dynamic routing handles new calculator and blog pages automatically
- Template-based approach allows rapid expansion of content

### Performance Scalability
- Static site can handle virtually unlimited traffic
- CDN distribution ensures global performance
- No database or server bottlenecks

### Maintenance Scalability
- Atomic Design pattern allows component reuse
- Centralized data management simplifies updates
- Clear separation of concerns facilitates team collaboration

## Future Improvements

### Technical Enhancements
1. **Progressive Web App (PWA)** - Add offline functionality
2. **Image Optimization** - Implement next/image with a custom loader for static exports
3. **Internationalization** - Add multi-language support
4. **Advanced Analytics** - Implement event tracking for calculator usage

### Feature Enhancements
1. **User Accounts** - Allow saving favorite calculators and preferences
2. **Currency Conversion** - Add real-time currency conversion for international travelers
3. **Mobile App** - Develop native mobile applications
4. **Interactive Guides** - Add interactive tutorials for tipping in different scenarios

### Content Expansion
1. **More Locations** - Expand location-specific calculator variants
2. **Video Content** - Add video tutorials about tipping etiquette
3. **Community Features** - Add user comments or forums for tipping discussions
4. **API Access** - Provide calculator functionality as an API for third-party use


The Tip Calculator Tool is a fully static site built with Next.js using Static Site Generation (SSG). All pages are pre-rendered at build time and served from a CDN. The calculator functionality runs entirely client-side using React and JavaScript.

## Component Interaction Flow

### Page Loading Flow
1. User requests a page from the CDN
2. Pre-rendered HTML is delivered to the browser
3. React hydrates the page, making interactive components functional
4. Client-side JavaScript initializes calculator functionality

### Calculator Interaction Flow
1. User enters bill amount in calculator form
2. Input is debounced to prevent excessive calculations
3. Tip percentage is selected (preset buttons or custom slider)
4. Optional settings are applied (split count, pre-tax calculation)
5. Calculator component computes and displays results in real-time

### Navigation Flow
1. User navigates using internal links
2. Next.js handles client-side navigation without full page reloads
3. New page content is displayed
4. Analytics event is triggered for page view

## External Services/APIs Used

### Google Analytics
- Used for tracking page views and user interactions
- Implemented via the `components/analytics.tsx` component
- Requires `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable

### CDN/Hosting
- Static files served from a CDN (Vercel, Netlify, or similar)
- No server-side processing required after deployment

## Build and Deployment Pipeline

### Development Workflow
1. Local development using `npm run dev`
2. Code changes with hot module reloading
3. Component testing in development environment

### Build Process
1. `npm run build` triggers Next.js build process
2. Pages are statically generated with `output: 'export'`
3. Static HTML, CSS, and JavaScript files are created in `out` directory
4. `scripts/gen-sitemap.ts` generates sitemap.xml and robots.txt

### Deployment Flow
1. Static files from `out` directory are uploaded to hosting provider
2. CDN distributes files globally
3. DNS directs users to CDN endpoints

## Security Measures

### Content Security
- Static site architecture minimizes attack vectors
- No server-side processing or database reduces security risks

### Data Handling
- All calculations performed client-side
- No user data stored or transmitted
- No cookies required for core functionality

### External Resources
- Placeholder images served from internal sources
- Google Analytics is the only external script

## Scalability Considerations

### Content Scalability
- Adding new calculators requires only data updates in `lib/data.ts`
- Dynamic routing handles new calculator and blog pages automatically
- Template-based approach allows rapid expansion of content

### Performance Scalability
- Static site can handle virtually unlimited traffic
- CDN distribution ensures global performance
- No database or server bottlenecks

### Maintenance Scalability
- Atomic Design pattern allows component reuse
- Centralized data management simplifies updates
- Clear separation of concerns facilitates team collaboration

## Future Improvements

### Technical Enhancements
1. **Progressive Web App (PWA)** - Add offline functionality
2. **Image Optimization** - Implement next/image with a custom loader for static exports
3. **Internationalization** - Add multi-language support
4. **Advanced Analytics** - Implement event tracking for calculator usage

### Feature Enhancements
1. **User Accounts** - Allow saving favorite calculators and preferences
2. **Currency Conversion** - Add real-time currency conversion for international travelers
3. **Mobile App** - Develop native mobile applications
4. **Interactive Guides** - Add interactive tutorials for tipping in different scenarios

### Content Expansion
1. **More Locations** - Expand location-specific calculator variants
2. **Video Content** - Add video tutorials about tipping etiquette
3. **Community Features** - Add user comments or forums for tipping discussions
4. **API Access** - Provide calculator functionality as an API for third-party use
