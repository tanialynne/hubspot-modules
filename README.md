# HubSpot Custom Modules Portfolio

A collection of custom HubSpot CMS modules demonstrating advanced HubL templating, responsive design, and JavaScript integration.

## Modules Overview

| Module | Description | Complexity |
|--------|-------------|------------|
| [PersonalityQuiz](#personalityquiz) | Interactive quiz with scoring and CRM integration | Advanced |
| [WebsiteHeader](#websiteheader) | Enterprise header with mega menu and sticky nav | Advanced |
| [DynamicFormTag](#dynamicformtag) | Form embedding with dynamic tag injection | Intermediate |
| [TimelineGrid](#timelinegrid) | CSS Grid-based event timeline | Intermediate |
| [CardSlider](#cardslider) | Slick carousel testimonial slider | Intermediate |
| [PricingCards](#pricingcards) | Accessible pricing comparison cards | Intermediate |
| [Testimonials](#testimonials) | Multi-layout testimonial display | Intermediate |

---

## Module Details

### PersonalityQuiz
**Location:** `PersonalityQuiz.module/`

An interactive personality assessment quiz with real-time scoring and CRM form integration.

**Key Features:**
- 7-question quiz with dynamic scoring
- Real-time progress bar
- Back navigation with score adjustment
- Hidden field injection for CRM tracking
- Configurable personality types
- Restart functionality

**Technologies:** jQuery, HubL, CSS3

---

### WebsiteHeader
**Location:** `WebsiteHeader.module/`

Enterprise-level website header with comprehensive navigation options.

**Key Features:**
- Mega menu support with configurable widths
- Sticky header with transparency options
- Mobile hamburger menu (Mmenu integration)
- Built-in search with typeahead
- Multiple header variants (default, center, split)
- Logo widget with conditional rendering
- Language switcher support
- 50+ configurable fields

**Technologies:** jQuery, Mmenu.js, HubL, CSS3

---

### DynamicFormTag
**Location:** `DynamicFormTag.module/`

Embeds third-party CRM forms with dynamic tag injection for tracking and segmentation.

**Key Features:**
- MutationObserver for async form detection
- Dynamic hidden field injection
- Conditional field visibility
- Post-submission redirect handling
- Works with ActiveCampaign, HubSpot, and similar CRMs

**Technologies:** Vanilla JavaScript, MutationObserver API, HubL

---

### TimelineGrid
**Location:** `TimelineGrid.module/`

Display events organized by date using CSS Grid layout.

**Key Features:**
- Date-grouped event listings
- Responsive 2-column to 1-column layout
- Optional event images with lazy loading
- Pure CSS Grid implementation (no JS required)
- Accessible semantic HTML

**Technologies:** CSS Grid, HubL

---

### CardSlider
**Location:** `CardSlider.module/`

Testimonial/content card slider using Slick carousel.

**Key Features:**
- Slick carousel with responsive breakpoints
- Dynamic card height (desktop/tablet/mobile)
- CSS custom properties for font sizing
- Optional section heading
- Full-width or container-width options
- Dot navigation indicators

**Technologies:** jQuery, Slick Carousel, HubL, CSS3

---

### PricingCards
**Location:** `PricingCards.module/`

Accessible pricing comparison cards with feature lists.

**Key Features:**
- Responsive grid layout (1-4 columns)
- Featured/recommended card highlighting
- Feature inclusion/exclusion display
- Accessible ARIA labels
- Hover animations with reduced motion support
- CSS-only (no JavaScript)

**Technologies:** CSS Flexbox, HubL, SVG icons

---

### Testimonials
**Location:** `Testimonials.module/`

Multi-layout testimonial display with theme integration.

**Key Features:**
- 4 layout options: Cards, Featured, Stacked, Minimal
- 2 or 3 column grid options
- Dark/Light/Custom color schemes
- Gradient, glow, and solid border styles
- Profile photo support
- Theme color inheritance

**Technologies:** CSS Grid, CSS Custom Properties, HubL

---

## Installation

1. Clone this repository
2. Use the HubSpot CLI to upload modules:
   ```bash
   hs upload --portal YOUR_PORTAL_ID modules/ModuleName.module
   ```
3. Add modules to your templates using the HubL module tag:
   ```hubl
   {% module "module_name" path="@hubspot/ModuleName" %}
   ```

## Dependencies

Some modules require external libraries:
- **jQuery** - PersonalityQuiz, CardSlider, WebsiteHeader
- **Slick Carousel** - CardSlider
- **Mmenu.js** - WebsiteHeader (mobile navigation)

Include these in your theme's base template or via HubSpot's asset manager.

## Browser Support

All modules are tested and compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11 (basic support)

## Accessibility

Modules follow WCAG 2.1 guidelines:
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Reduced motion support via `prefers-reduced-motion`
- Color contrast compliance

## License

MIT License - Feel free to use and modify for your projects.

---

*Built with HubSpot CMS and HubL templating language*
