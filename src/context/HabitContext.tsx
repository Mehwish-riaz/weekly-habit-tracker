/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Habit } from '../types';

interface HabitContextType {
  habits: Habit[];
  addHabit: (name: string) => void;
  renameHabit: (id: string, name: string) => void;
  deleteHabit: (id: string) => void;
}

const HabitContext = createContext<HabitContextType | null>(null);

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}

export function HabitProvider({ children }: { children: ReactNode }) {
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (name: string) => {
    const habit: Habit = {
      id: generateId(),
      name: name.trim(),
      createdAt: new Date().toISOString(),
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

  return (
    <HabitContext.Provider value={{ habits, addHabit, renameHabit, deleteHabit }}>
      {children}
    </HabitContext.Provider>
  );
}

export function useHabits() {
  const ctx = useContext(HabitContext);
  if (!ctx) throw new Error('useHabits must be used within HabitProvider');
  return ctx;
}
