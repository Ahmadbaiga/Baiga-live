# Design Guidelines for WebWrite.co Dark Theme Clone

## Design Approach

**Selected Approach:** Reference-Based with inspiration from modern agency portfolios (Vercel, Linear, Awwwards-winning agencies) combined with dark theme best practices from Stripe and Apple's dark interfaces.

**Core Principles:**
- Bold, sophisticated dark aesthetic that showcases work effectively
- High contrast for readability while maintaining elegance
- Strategic use of gradients and glows for visual interest
- Premium feel befitting a web development agency

## Typography System

**Font Families:**
- Primary: Inter or DM Sans (headings, UI elements)
- Secondary: Space Grotesk or Outfit (accent text, CTAs)
- Body: Inter (all body content)

**Type Scale:**
- Hero Heading: text-6xl md:text-7xl lg:text-8xl, font-bold, tracking-tight
- Section Headings: text-4xl md:text-5xl, font-bold
- Subsection Headings: text-2xl md:text-3xl, font-semibold
- Card Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal, leading-relaxed
- Small Text/Captions: text-sm, font-medium

## Layout System

**Spacing Primitives:** Consistently use Tailwind units of 4, 6, 8, 12, 16, 20, and 24 for margins and padding throughout.

**Container Strategy:**
- Full-width sections with inner max-w-7xl containers
- Section padding: py-16 md:py-24 lg:py-32
- Content sections: max-w-6xl mx-auto px-4 md:px-6

**Grid Patterns:**
- Portfolio grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-6 md:gap-8
- Services cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-8
- Gallery: Masonry-style layout with varying heights

## Component Library

### Navigation
**Header:** Fixed/sticky navigation with backdrop blur effect
- Logo on left, menu items center/right
- Glass-morphism effect (semi-transparent with blur)
- Smooth scroll behavior to anchor sections
- Mobile: Hamburger menu with slide-in drawer
- CTAs (Call Us, Get a Quote) as outlined buttons with hover glow effects

### Hero Section
**Layout:** Full viewport height (min-h-screen) with centered content
- Large hero heading with gradient text effect
- Supporting subheading (text-xl md:text-2xl)
- Dual CTA buttons (primary filled, secondary outlined)
- Abstract geometric background elements or gradient mesh
- Floating UI elements showcasing code snippets or design mockups

### Services Section ("What we do")
**Structure:** Three-column card grid
- Icon at top (use Heroicons via CDN)
- Service title (text-2xl, font-semibold)
- Description text (3-4 lines, text-base, opacity-80)
- Cards with subtle border, hover effect with slight elevation and glow
- Each card: p-8, rounded-2xl

### Portfolio Section
**Layout:** Featured work showcase
- Large featured project card (2:1 aspect ratio)
- Grid of 4-6 additional projects below (2-3 columns)
- Each card includes: project image, title, category tag, brief description
- Hover state: image scale effect, overlay with "View Project" CTA
- Cards: rounded-xl with overflow-hidden

### Gallery Page
**Design:** Dedicated page with immersive image grid
- Masonry layout with varying image sizes
- Lightbox functionality for full-screen viewing
- Category filters at top (All, Web Design, Branding, UI/UX)
- Smooth transitions between filter states
- Images: rounded-lg, gap-4

### Footer
**Rich Footer Design:**
- Multi-column layout (4 columns on desktop, stack on mobile)
- Column 1: Logo, tagline, social media icons
- Column 2: Quick links (Services, Portfolio, Gallery, About, Contact)
- Column 3: Services list
- Column 4: Contact information (email, phone, address)
- Newsletter signup form with input and button
- Bottom bar: Copyright, Privacy Policy, Terms
- Footer padding: pt-20 pb-8

### Contact CTAs
**Dual CTA Strategy:**
- Primary: "Get a Quote" - larger, more prominent (filled button with gradient or solid background)
- Secondary: "Call Us" - outlined button with icon
- Both buttons: px-8 py-4, text-lg, rounded-full
- Hover states: transform scale-105, shadow glow effect

## Images

**Hero Section:**
- Large hero image: Abstract technology/coding-themed background OR gradient mesh with geometric shapes
- Can use split-screen layout: hero content on left (60%), abstract visual on right (40%)
- Alternative: Full-screen background with overlay gradient for text contrast

**Portfolio/Project Cards:**
- Each portfolio item requires a project thumbnail/screenshot
- Aspect ratio: 16:9 or 4:3 for consistency
- Images should showcase website designs, mobile apps, branding work
- Use subtle hover zoom effect (scale-105)

**Gallery Page:**
- 15-20 high-quality images of completed work
- Mix of full website screenshots, detail shots, mobile mockups
- Varying sizes in masonry grid for visual interest

**Services Section:**
- Consider using subtle background patterns or abstract shapes
- Icons from Heroicons library for each service

## Animations & Interactions

**Strategic Animation Usage:**
- Hero: Subtle fade-in and slide-up on page load for hero content
- Scroll-triggered: Fade-in for section headings as they enter viewport
- Hover effects: Card elevation, image zoom, button glow
- Navigation: Smooth scroll behavior, active section highlighting
- Keep animations subtle and performance-optimized

**NO complex scroll-jacking or distracting effects**

## Accessibility

- High contrast text (pure white or near-white on dark backgrounds)
- Focus states: visible outline with accent color
- Keyboard navigation support for all interactive elements
- Semantic HTML structure (nav, main, section, article)
- Alt text for all images
- ARIA labels for icon buttons

## Dark Theme Specifications

**Surface Hierarchy:**
- Primary background: Deepest dark (#0a0a0a or similar)
- Card/component backgrounds: Lighter dark (#1a1a1a, #1e1e1e)
- Elevated elements: Subtle borders with semi-transparent white/accent colors

**Text Treatment:**
- Primary text: Near-white (#f5f5f5, #fafafa) for maximum readability
- Secondary text: Medium gray (#a0a0a0, #b0b0b0) for hierarchy
- Accent text: Vibrant gradient or solid color for CTAs and highlights

**Visual Accents:**
- Use subtle gradients for CTAs and hero elements
- Glow effects on hover for interactive elements
- Border treatments: 1px solid with low opacity white or accent color

This comprehensive design creates a modern, premium dark-themed agency website that effectively showcases WebWrite's portfolio while maintaining excellent usability and visual appeal.