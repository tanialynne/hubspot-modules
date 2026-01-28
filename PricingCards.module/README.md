# Pricing Cards Module

Accessible pricing comparison cards with feature lists, responsive layouts, and hover animations.

## Features

- **Responsive Grid**: Adapts from 1-4 columns based on card count
- **Featured Cards**: Highlight recommended plans with badges
- **Feature Lists**: Include/exclude indicators with icons
- **Accessible**: ARIA labels, semantic HTML, screen reader support
- **CSS-Only**: No JavaScript for optimal performance
- **Reduced Motion**: Respects user's motion preferences

## Layout Options

- 2-column layout (toggle in settings)
- Auto-layout based on card count (2, 3, or 4 cards)
- Featured card scaling on desktop

## Module Fields

### Section Fields
| Field | Description |
|-------|-------------|
| `header_content` | Rich text section heading |
| `background_color` | Section background |
| `cta` | Section CTA below cards |
| `two_column` | Force 2-column layout |
| `identity` | Section ID for anchor links |

### Card Fields (Repeater)
| Field | Description |
|-------|-------------|
| `card_header` | Plan name |
| `price` | Price display (e.g., "$199") |
| `price_period` | Period (e.g., "/month") |
| `price_note` | Note above price (e.g., "starting at") |
| `is_featured` | Mark as recommended |
| `featured_label` | Badge text (e.g., "Most Popular") |
| `card_image` | Plan icon/image |
| `card_content` | Plan description |
| `features` | Feature list (repeater) |
| `cta_text` | Button text |
| `cta_link` | Button link |

### Feature Fields
| Field | Description |
|-------|-------------|
| `feature_text` | Feature description |
| `is_included` | Include checkmark or X |

## Accessibility Features

- `role="list"` and `role="listitem"` for card grid
- `aria-label` for section and features
- `aria-labelledby` linking cards to titles
- Screen reader text for excluded features
- Focus styles on CTAs

## Files

```
PricingCards.module/
├── module.html    # HubL + scoped CSS
├── module.css     # Placeholder
├── module.js      # Placeholder (CSS-only)
├── fields.json    # Card configuration
├── meta.json      # Module metadata
└── README.md      # Documentation
```
