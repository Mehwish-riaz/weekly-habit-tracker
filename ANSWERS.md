# ANSWERS — Frontend Assessment

## 1. How to Run

```bash
git clone <repo-url>
cd weekly-habit-tracker
npm install
npm run dev
```

Open the local URL shown in the terminal (default `http://localhost:5173`). The app uses `localStorage` so no backend or environment variables are needed.

## 2. Stack & Design Choices

**React + TypeScript + Tailwind CSS v4** — React provides component-based state management and reusability. TypeScript catches type errors at compile time. Tailwind v4's new `@theme` and `@utility` directives let us define a custom design system (neon cyan tokens, glassmorphism utilities) without writing custom CSS classes.

**Weekly grid** — A table layout (`DesktopTable`) for screens ≥768px and stacked cards (`MobileCards`) for smaller screens. This avoids horizontal scroll on mobile while keeping the week overview scannable on desktop.

**Streak UI** — The current streak is shown per-habit as an amber badge in each row/card, and the strongest streak across all habits appears in the stat cards. This gives both granular and at-a-glance motivation without overwhelming the layout.

**Dark theme** — The entire UI is dark-first with layered radial gradients, glassmorphism cards (`backdrop-filter: blur(32px)`), and subtle glow effects that create depth without relying on shadows alone.

## 3. Responsive & Accessibility

**360px mobile** — The `MobileCards` component renders each habit as a card with a 7-column day grid inside. Cards stack vertically with no overlap. The `AddHabitForm` and `WeekNavigation` both shrink fluidly.

**1440px desktop** — `DesktopTable` renders a full weekly grid with Monday–Sunday columns. The header has `w-44` for habit names and `w-16` for each day cell, maintaining readability at 1440px. The table is capped inside `max-w-5xl` centered layout.

**Accessibility** — Focus-visible outlines (cyan, 2px, with offset) are applied globally via CSS. All interactive elements (buttons, inputs) are keyboard-accessible. The color palette maintains sufficient contrast (white text on dark backgrounds, amber streak badges). Screen readers receive semantic HTML (`<table>`, `<header>`, `<main>`).

## 4. AI Usage

AI (Claude via opencode) was used for:
- Initial project scaffolding and boilerplate.
- UI polish implementation (animated background gradients, glassmorphism refinements, hover lift, check pulse keyframes).
- Documentation generation (README, ANSWERS).

Changes from AI output: The AI-generated animated background was changed from a complex multi-layered `body::before` approach to a simpler `background-position` animation to reduce paint overhead. Hover lift was adjusted from `-3px` to `-2px` per the specification. The glass utility was refined to use cyan-tinted borders instead of plain white.

## 5. Honest Gap

**Limitation**: The streak system only tracks consecutive days backwards from today (`computeStreak` iterates up to 366 days). It does not distinguish between weekdays and weekends or support custom rest days.

**Future improvement**: Add a calendar heatmap view showing the past 12 months of completions at a glance, with color intensity per day. This would provide long-term motivation beyond the current-week view.
