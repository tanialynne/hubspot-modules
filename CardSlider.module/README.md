# Card Slider Module

Testimonial/content card slider using Slick carousel with responsive breakpoints and dynamic sizing.

## Features

- **Slick Carousel**: Smooth sliding with touch support
- **Responsive Breakpoints**: Different layouts for desktop/tablet/mobile
- **Dynamic Heights**: Configurable card heights per viewport
- **CSS Custom Properties**: Dynamic font sizing
- **Optional Heading**: Section heading above slider
- **Width Options**: Full-width or contained layout
- **Dot Navigation**: Progress indicators

## Responsive Behavior

| Viewport | Slides Shown |
|----------|--------------|
| Desktop (>1250px) | 3 or 3.08 |
| Tablet (768-1250px) | 2 |
| Mobile (<768px) | 1 or 1.10 |

## Module Fields

### Style Tab
| Field | Description |
|-------|-------------|
| `background.color` | Section background color |
| `spacing.desktop/mobile` | Section padding |
| `card_height.desktop/tablet/mobile` | Card height in pixels |

### Content Tab
| Field | Description |
|-------|-------------|
| `enable_top_content` | Show section heading |
| `content` | Rich text heading |
| `cards` | Repeater with card content |
| `slider_width` | Full width or container |

### Card Fields
| Field | Description |
|-------|-------------|
| `content` | Quote or testimonial text |
| `content_size` | Font size per viewport |
| `name_t` | Person's name |
| `designation` | Title/role |
| `image` | Card image |

## Dependencies

- jQuery
- Slick Carousel

Include in your theme:
```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<script src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
```

## Files

```
CardSlider.module/
├── module.html    # HubL + CSS + JS (scoped)
├── module.css     # Placeholder
├── module.js      # Placeholder
├── fields.json    # Comprehensive field config
├── meta.json      # Module metadata
└── README.md      # Documentation
```
