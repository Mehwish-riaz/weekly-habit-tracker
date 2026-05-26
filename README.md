# 🗓️ Weekly Habit Tracker

A production-style, responsive habit tracking application built with **React, TypeScript, and Tailwind CSS**.

It allows users to manage daily habits through a **weekly grid interface**, track **current streaks**, navigate across weeks, and maintain full progress history — all persisted locally using `localStorage` with no backend dependency.

---

##  Live Demo

 https://weekly-habit-tracker-vert.vercel.app/

---

##  Key Features

###  Weekly Grid Tracking
A structured weekly view where habits are displayed vertically and days horizontally.  
- Desktop: full table-based grid for fast scanning  
- Mobile: responsive stacked cards for usability on small screens  

###  Streak System
Each habit maintains a **current streak counter**, automatically calculated based on consecutive completions.

###  Week Navigation
Users can move between past and future weeks while preserving historical completion data.

###  Full Habit Management
Complete CRUD support:
- Create new habits
- Rename existing habits
- Delete habits with confirmation
- Toggle daily completion status

###  Persistent Storage
All user data is stored in `localStorage`, ensuring:
- No data loss on refresh
- Instant state restoration

---

##  Tech Stack

- **React** — Component-based UI architecture  
- **TypeScript** — Type-safe development  
- **Tailwind CSS** — Utility-first styling with custom theme design  
- **Vite** — Fast bundler and dev server  
- **localStorage** — Client-side persistence layer  

---

##  Getting Started

Clone the repository and install dependencies:

```bash
npm install
npm run dev

Open the URL shown in the terminal (default http://localhost:5173).

 ##  Production Build

bash
npm run build
npm run preview
Output is served from the dist directory.

---

