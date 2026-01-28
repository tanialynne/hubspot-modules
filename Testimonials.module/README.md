# Testimonials Module

Multi-layout testimonial display with theme integration and comprehensive styling options.

## Features

- **4 Layout Options**: Cards, Featured, Stacked, Minimal
- **Theme Integration**: Inherits colors from HubSpot theme settings
- **Color Schemes**: Dark, Light, or Custom
- **Border Styles**: None, Solid, Gradient, Glow
- **Responsive**: Mobile-optimized layouts
- **CSS-Only**: No JavaScript required

## Layout Options

### Cards Grid
Standard grid of equal-sized testimonial cards.
- 2 or 3 columns (configurable)
- Responsive stacking on mobile

### Featured Quote + Cards
One large featured testimonial with smaller supporting cards.
- Featured testimonial prominently displayed
- Supporting cards in auto-fit grid below

### Stacked List
Vertical list with quote icon, text, and attribution.
- Horizontal layout on desktop
- Stacked on mobile
- Hover animation (translateX)

### Minimal
Clean, centered quotes with decorative dividers.
- Italic quote styling
- Gradient dividers between items
- No card backgrounds

## Module Fields

### Section Header
| Field | Description |
|-------|-------------|
| `show_header` | Toggle section header |
| `eyebrow` | Small text above heading |
| `heading` | Main heading |
| `subheading` | Supporting text |

### Layout Options
| Field | Description |
|-------|-------------|
| `layout_style` | cards/featured/stacked/minimal |
| `columns` | 2 or 3 columns (cards layout) |
| `show_quote_icon` | Toggle quote icon |
| `show_photos` | Toggle profile photos |
| `show_company` | Toggle company names |

### Testimonials (Repeater)
| Field | Description |
|-------|-------------|
| `quote` | Testimonial text |
| `person_name` | Name |
| `person_title` | Title/role |
| `company_name` | Company |
| `profile_image` | Photo |
| `is_featured` | Mark as featured |

### Style Options
| Field | Description |
|-------|-------------|
| `color_scheme` | dark/light/custom |
| `background_color` | Custom background |
| `card_background` | Custom card background |
| `text_color` | Custom text color |
| `accent_color` | Quote icon, company names |
| `border_style` | none/solid/gradient/glow |
| `section_padding` | small/medium/large |

## CSS Custom Properties

The module uses CSS custom properties for theming:
- `--tm-bg`: Section background
- `--tm-card-bg`: Card background
- `--tm-text`: Text color
- `--tm-text-muted`: Secondary text
- `--tm-accent`: Accent color
- `--tm-quote-icon`: Quote icon color

## Files

```
Testimonials.module/
├── module.html    # HubL template
├── module.css     # Comprehensive styles
├── module.js      # Placeholder (CSS-only)
├── fields.json    # Full field configuration
├── meta.json      # Module metadata
└── README.md      # Documentation
```
