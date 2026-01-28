# Timeline Grid Module

Display events organized by date in a responsive CSS Grid layout. Perfect for event schedules, conference agendas, or milestone timelines.

## Features

- **Date Grouping**: Events organized under date headers
- **CSS Grid Layout**: Modern, responsive grid implementation
- **Optional Images**: Event images with lazy loading
- **No JavaScript**: Pure CSS for optimal performance
- **Accessible**: Semantic HTML structure

## Layout

### Desktop (>990px)
- 2-column grid: text content (2fr) + image (1fr)
- Events with images span across columns
- Date headers full width

### Mobile (<990px)
- Single column layout
- Images stack below text content
- Maintains visual hierarchy

## Module Fields

| Field | Type | Description |
|-------|------|-------------|
| `date` | Group (repeater) | Date groups containing events |
| `date_field` | Date | The date for the event group |
| `event` | Group (repeater) | Events within each date |
| `time` | Text | Event time (e.g., "9:00 AM - 10:30 AM") |
| `image_field` | Image | Optional event image |
| `description` | Text | Event description |

## Data Structure

```
Date Group 1
├── Date: July 15, 2024
├── Event 1
│   ├── Time: 9:00 AM
│   ├── Description: Opening keynote
│   └── Image: (optional)
├── Event 2
│   └── ...
Date Group 2
├── Date: July 16, 2024
└── ...
```

## CSS Customization

Key CSS variables to customize:
- `--accent-color`: Date header color
- `--text-light`: Event time color
- `--text-muted`: Description color

## Files

```
TimelineGrid.module/
├── module.html    # HubL template
├── module.css     # CSS Grid styles
├── module.js      # Placeholder (no JS needed)
├── fields.json    # Nested repeater fields
├── meta.json      # Module metadata
└── README.md      # Documentation
```
