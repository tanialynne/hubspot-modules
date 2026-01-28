# Website Header Module

Enterprise-level website header with mega menu support, sticky navigation, mobile hamburger menu, and comprehensive configuration options.

## Features

- **Mega Menu**: Support for large dropdown menus with configurable widths
- **Sticky Header**: Fixed position on scroll with transparency options
- **Mobile Navigation**: Hamburger menu with Mmenu.js integration
- **Built-in Search**: Typeahead search with keyboard navigation
- **Multiple Variants**: Default, center, and split header layouts
- **Logo Widget**: Conditional rendering with click-through support
- **Language Switcher**: Multi-language support
- **50+ Configurable Fields**: Extensive customization options

## Configuration Options

### Header Variants
- Default (logo left, nav right)
- Center (centered logo and nav)
- Split (nav items on both sides of logo)

### Sticky Options
- Enable/disable sticky behavior
- Transparency on scroll
- Background color changes

### Top Bar
- Enable/disable top bar
- Icon support
- Social media links
- Contact information

### Mobile Menu
- Custom navigation title
- Position (left/right)
- Close button

### Search
- Enable/disable search
- Typeahead suggestions
- Custom placeholder text

## Dependencies

- jQuery
- Mmenu.js (for mobile navigation)

## Files

```
WebsiteHeader.module/
├── module.html    # HubL template (complex)
├── module.css     # Comprehensive styles
├── module.js      # Navigation logic
├── fields.json    # 50+ configurable fields
├── meta.json      # Module metadata
└── README.md      # Documentation
```

## Usage Notes

1. This module requires Mmenu.js for mobile navigation
2. Configure sticky header behavior in the Style tab
3. Use mega menu classes for large navigation dropdowns
4. Test on mobile devices to ensure proper hamburger menu behavior
