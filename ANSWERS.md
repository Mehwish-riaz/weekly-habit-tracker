# ANSWERS — Frontend Assessment

## 1. How to Run

```bash
git clone https://github.com/Mehwish-riaz/weekly-habit-tracker.git

cd weekly-habit-tracker
npm install
npm run dev
```

Open the local URL shown in the terminal (default `http://localhost:5173`). 
The app uses `localStorage` so no backend or environment variables are needed.

## 2. Stack & Design Choices

**React + TypeScript + Tailwind CSS v4** — React + TypeScript + Tailwind CSS v4 — React provides a component-based architecture for reusable UI. TypeScript ensures type safety at compile time. Tailwind v4 enables a utility-first design system with custom theme tokens, allowing consistent styling without separate CSS files.

**Weekly grid** — A table layout (`DesktopTable`) for screens ≥768px and stacked cards (`MobileCards`) for smaller screens. This avoids horizontal scroll on mobile while keeping the week overview scannable on desktop.

**Streak UI** — The current streak is shown per-habit as an amber badge in each row/card, and the strongest streak across all habits appears in the stat cards. This gives both granular and at-a-glance motivation without overwhelming the layout.

**Dark theme** — The entire UI is dark-first with layered radial gradients, glassmorphism cards (`backdrop-filter: blur(32px)`), and subtle glow effects that create depth without relying on shadows alone.

## 3. Responsive & Accessibility

**360px mobile** — The `MobileCards` component renders each habit as a card with a 7-column day grid inside. Cards stack vertically with no overlap. The `AddHabitForm` and `WeekNavigation` both shrink fluidly.

**1440px desktop** — `DesktopTable` renders a full weekly grid with Monday–Sunday columns. The header has `w-44` for habit names and `w-16` for each day cell, maintaining readability at 1440px. The table is capped inside `max-w-5xl` centered layout.

**Accessibility** — Focus-visible outlines (cyan, 2px, with offset) are applied globally via CSS. All interactive elements (buttons, inputs) are keyboard-accessible. The color palette maintains sufficient contrast (white text on dark backgrounds, amber streak badges). Screen readers receive semantic HTML (`<table>`, `<header>`, `<main>`).

## 4.  AI Usage

This project was developed with assistance from OpenCode (Claude) as a collaborative development tool rather than the primary builder.

**Where AI was used:**

- **Initial scaffolding** — Assessment understanding, Project setup, component structure, and basic layout generation
- **UI polish** — Glassmorphism utilities, hover animations, checkmark effects, and ambient background gradients


**Modifications I made to AI output:**

- **Animated background** — Replaced a multi-layered `body::before` approach with a simpler `background-position` animation to reduce paint overhead
- **Hover lift** — Reduced from `-3px` to `-2px` for a more subtle, restrained card interaction
- **Glass utility** — Changed border tint from plain white to cyan to better align with the app's neon accent palette

**Human-authored code:** Core logic and architecture were implemented independently, including:

Streak calculation algorithm
Weekly date computation logic
Habit CRUD operations and state management
Responsive layout strategy (mobile vs desktop grid design)

AI was used for acceleration and ideation, while final implementation decisions were manually developed.

## 5. Honest Gap

**Limitation**: The streak system only tracks consecutive days backwards from today (`computeStreak` iterates up to 366 days). It does not distinguish between weekdays and weekends or support custom rest days.

**Future improvement**: Add a calendar heatmap view showing the past 12 months of completions at a glance, with color intensity per day. This would provide long-term motivation beyond the current-week view.
