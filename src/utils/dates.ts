import type { Habit } from '../types';

export function getWeekDates(offset = 0): Date[] {
  const now = new Date();
  now.setDate(now.getDate() + offset * 7);
  const day = now.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  const monday = new Date(now);
  monday.setDate(now.getDate() + diff);
  monday.setHours(0, 0, 0, 0);

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

export function formatDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function isToday(date: Date): boolean {
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}

export function getWeekRange(offset = 0): string {
  const dates = getWeekDates(offset);
  const start = dates[0];
  const end = dates[6];
  const fmt: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
  const fmtEnd: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  const startStr = start.toLocaleDateString('en-US', fmt);
  const endStr = end.toLocaleDateString('en-US', fmtEnd);
  if (start.getMonth() === end.getMonth()) {
    return `${startStr} — ${end.toLocaleDateString('en-US', { day: 'numeric', year: 'numeric' })}`;
  }
  return `${startStr} — ${endStr}`;
}

function getWeekMonday(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function computeStreak(completions: Record<string, boolean>): number {
  const today = new Date();

  let streak = 0;
  let found = false;

  for (let i = 0; i < 366; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = formatDateKey(d);

    if (completions[key]) {
      found = true;
      streak++;
    } else if (found) {
      break;
    }
  }

  return streak;
}

export function getCurrentStreakDays(habits: Habit[]): number {
  if (habits.length === 0) return 0;
  return Math.max(...habits.map((h) => computeStreak(h.completions)));
}

export function getWeeklyProgress(habits: Habit[], weekDates: Date[]): number {
  if (habits.length === 0 || weekDates.length === 0) return 0;

  const today = new Date();
  today.setHours(23, 59, 59, 999);
  const validDates = weekDates.filter((d) => d <= today);

  if (validDates.length === 0) return 0;

  const total = habits.length * validDates.length;
  let completed = 0;
  for (const habit of habits) {
    for (const date of validDates) {
      const key = formatDateKey(date);
      if (habit.completions[key]) completed++;
    }
  }
  return Math.round((completed / total) * 100);
}

export function getOverallProgress(habits: Habit[]): number {
  if (habits.length === 0) return 0;

  const today = new Date();
  today.setHours(23, 59, 59, 999);

  // Collect every unique tracked date across ALL habits (excluding future)
  const trackedDates = new Set<string>();
  for (const habit of habits) {
    for (const key of Object.keys(habit.completions)) {
      const d = new Date(key + 'T00:00:00');
      if (d <= today) {
        trackedDates.add(key);
      }
    }
  }

  if (trackedDates.size === 0) return 0;

  // Group tracked dates into their Monday-Sunday weeks
  const trackedWeekIds = new Set<string>();
  for (const key of trackedDates) {
    const d = new Date(key + 'T00:00:00');
    trackedWeekIds.add(formatDateKey(getWeekMonday(d)));
  }

  // For each tracked week, count ALL 7 days (excluding future dates in current week)
  let total = 0;
  let completed = 0;
  for (const mondayKey of trackedWeekIds) {
    const monday = new Date(mondayKey + 'T00:00:00');
    for (let day = 0; day < 7; day++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + day);
      if (date > today) continue;
      const dateKey = formatDateKey(date);
      for (const habit of habits) {
        const habitCreated = new Date(habit.createdAt);
        habitCreated.setHours(0, 0, 0, 0);
        if (habitCreated <= date) {
          total++;
          if (habit.completions[dateKey]) completed++;
        }
      }
    }
  }

  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}
