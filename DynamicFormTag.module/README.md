# Dynamic Form Tag Module

Embeds third-party CRM forms with dynamic tag injection using MutationObserver for robust async form detection.

## Features

- **MutationObserver Pattern**: Detects forms loaded asynchronously
- **Dynamic Tag Injection**: Adds hidden fields for tracking/segmentation
- **Conditional Fields**: Show/hide form fields based on configuration
- **Redirect Handling**: Custom post-submission redirect
- **CRM Agnostic**: Works with ActiveCampaign, HubSpot Forms, Mailchimp, etc.

## How It Works

1. Module embeds the CRM form script
2. MutationObserver watches for form injection into DOM
3. Once detected, hidden tag field is added/updated
4. Optional fields are hidden based on settings
5. Form submission triggers redirect

## Use Cases

- Landing page lead capture with source tracking
- A/B test form variations with different tags
- Campaign-specific form tagging
- Simplified forms (hide name field for quick signup)

## Module Fields

| Field | Type | Description |
|-------|------|-------------|
| `form_id` | Number | CRM form identifier |
| `form_embed_url` | Text | Base URL for form embed script |
| `redirect_url` | URL | Post-submission redirect destination |
| `dynamic_tag` | Text | Tag name for tracking/segmentation |
| `show_name_field` | Boolean | Toggle name field visibility |

## Technical Details

### MutationObserver
The module uses MutationObserver to detect asynchronously loaded forms:

```javascript
var observer = new MutationObserver(function(mutationsList) {
    // Detect when form is added to DOM
    // Inject tag and disconnect observer
});
observer.observe(document.body, { childList: true, subtree: true });
```

This ensures the module works regardless of when the form loads.

## Files

```
DynamicFormTag.module/
├── module.html    # HubL template with inline JS
├── module.css     # Form styling
├── module.js      # Placeholder (JS in HTML for HubL vars)
├── fields.json    # Module configuration
├── meta.json      # Module metadata
└── README.md      # Documentation
```
