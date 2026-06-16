# feedback-widget

A small embeddable feedback widget built with React, TypeScript, Vite and Tailwind CSS. It lets users report a bug, suggest an idea, or leave any other comment, optionally attaching a screenshot of the page.

Built as part of Rocketseat's NLW (Next Level Week) program.

## Features

- Three feedback types: bug, idea, and other
- Screenshot capture of the current page via [html2canvas](https://github.com/niklasvh/html2canvas)
- Multi-step flow: choose type → write feedback → success screen

## Tech stack

- [React](https://react.dev) 18 + TypeScript
- [Vite](https://vitejs.dev) for dev server and bundling
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Headless UI](https://headlessui.com) and [Phosphor Icons](https://phosphoricons.com)

## Getting started

```bash
npm install
npm run dev
```

Other available scripts:

```bash
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
```

## Project structure

```text
src/
├── App.tsx                  # renders the Widget
├── components/
│   ├── Widget.tsx           # floating button that opens/closes the widget
│   ├── CloseButton.tsx
│   ├── Loading.tsx
│   └── WidgetForm/
│       ├── index.tsx        # step controller (type → content → success)
│       ├── ScreenshotButton.tsx
│       └── Steps/
│           ├── FeedbackTypeStep.tsx
│           ├── FeedbackContentStep.tsx
│           └── FeedbackSuccessStep.tsx
└── assets/                  # icons used per feedback type
```

## Status

The submit handler in `FeedbackContentStep` currently logs the feedback (comment + screenshot) to the console instead of sending it to an API — wiring up a backend endpoint is the next step.
