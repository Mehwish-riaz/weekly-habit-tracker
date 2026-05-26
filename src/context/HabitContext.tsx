/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Habit } from '../types';

interface HabitContextType {
  habits: Habit[];
  addHabit: (name: string) => void;
  renameHabit: (id: string, name: string) => void;
  deleteHabit: (id: string) => void;
  toggleCompletion: (habitId: string, dateKey: string) => void;
  weekOffset: number;
  goToNextWeek: () => void;
  goToPreviousWeek: () => void;
  goToCurrentWeek: () => void;
}

const HabitContext = createContext<HabitContextType | null>(null);

const STORAGE_KEY = 'weekly-habit-tracker-habits';

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}

function loadHabits(): Habit[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) return JSON.parse(data);
  } catch {
    /* corrupted data — start fresh */
  }
  return [];
}

export function HabitProvider({ children }: { children: ReactNode }) {
  const [habits, setHabits] = useState<Habit[]>(loadHabits);
  const [weekOffset, setWeekOffset] = useState(0);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
    } catch {
      /* storage full or unavailable */
    }
  }, [habits]);

  const addHabit = (name: string) => {
    const habit: Habit = {
      id: generateId(),
      name: name.trim(),
      createdAt: new Date().toISOString(),
      completions: {},
    };
    setHabits((prev) => [...prev, habit]);
  };

  const renameHabit = (id: string, name: string) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, name: name.trim() } : h)),
    );
  };

  const deleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  const toggleCompletion = (habitId: string, dateKey: string) => {
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id !== habitId) return h;
        const completions = { ...h.completions };
        if (completions[dateKey]) {
          delete completions[dateKey];
        } else {
          completions[dateKey] = true;
        }
        return { ...h, completions };
      }),
    );
  };

  const goToNextWeek = () => setWeekOffset((prev) => prev + 1);
  const goToPreviousWeek = () => setWeekOffset((prev) => prev - 1);
  const goToCurrentWeek = () => setWeekOffset(0);

  return (
    <HabitContext.Provider
      value={{
        habits,
        addHabit,
        renameHabit,
        deleteHabit,
        toggleCompletion,
        weekOffset,
        goToNextWeek,
        goToPreviousWeek,
        goToCurrentWeek,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
}

export function useHabits() {
  const ctx = useContext(HabitContext);
  if (!ctx) throw new Error('useHabits must be used within HabitProvider');
  return ctx;
}
