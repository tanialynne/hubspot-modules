# Personality Quiz Module

An interactive personality assessment quiz with real-time scoring, progress tracking, and CRM form integration.

## Features

- **Multi-Question Quiz**: 7 customizable questions with personality type mapping
- **Real-Time Progress**: Visual progress bar showing completion percentage
- **Back Navigation**: Users can go back and change answers (scores adjust accordingly)
- **CRM Integration**: Hidden field injection for tracking quiz results
- **Restart Capability**: Full quiz restart without page reload
- **Responsive Design**: Works on all device sizes

## How It Works

1. User answers questions by clicking options
2. Each answer increments a personality type score
3. Progress bar updates with each question
4. Final result is calculated (highest scoring type)
5. Result is injected into hidden form field
6. Form submits to your CRM with the personality type

## Customization

### Modify Questions
Edit `module.js` to customize the `quizData` object:

```javascript
const quizData = {
    profiles: ["Type A", "Type B", "Type C", "Type D"],
    questions: [
        {
            question: "Your question here?",
            answers: [
                { text: "Answer option 1", type: "Type A" },
                { text: "Answer option 2", type: "Type B" },
                // ... more answers
            ]
        },
        // ... more questions
    ]
};
```

### Style Customization
Modify `module.css` to change:
- Progress bar color (`.progress` background)
- Option hover effects (`.option-div:hover`)
- Button styles (`#restart`)
- Result display (`#user-result`)

## Module Fields

| Field | Type | Description |
|-------|------|-------------|
| `form_action_url` | Text | CRM form submission endpoint |
| `form_id` | Text | Your CRM form identifier |

## Dependencies

- jQuery 3.6.0+

## Files

```
PersonalityQuiz.module/
├── module.html    # HubL template
├── module.css     # Styles
├── module.js      # Quiz logic
├── fields.json    # Module fields
├── meta.json      # Module metadata
└── README.md      # Documentation
```
