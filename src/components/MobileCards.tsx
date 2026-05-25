import { useState } from 'react';
import { useHabits } from '../context/HabitContext';
import ConfirmDialog from './ConfirmDialog';
import { getWeekDates, formatDateKey, isToday } from '../utils/dates';

const DAY_NAMES = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function MobileCards() {
  const { habits, toggleCompletion, renameHabit, deleteHabit } = useHabits();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const weekDates = getWeekDates();
  const dateKeys = weekDates.map(formatDateKey);

  const startEditing = (habit: { id: string; name: string }) => {
    setEditingId(habit.id);
    setEditingName(habit.name);
  };

  const saveRename = () => {
    if (editingId && editingName.trim()) {
      renameHabit(editingId, editingName.trim());
    }
    setEditingId(null);
    setEditingName('');
  };

  const cancelRename = () => {
    setEditingId(null);
    setEditingName('');
  };

  const confirmDelete = () => {
    if (deleteId) {
      deleteHabit(deleteId);
      setDeleteId(null);
    }
  };

  if (habits.length === 0) {
    return (
      <div className="glass rounded-2xl p-8 text-center card-depth">
        <div className="flex flex-col items-center gap-3">
          <div className="size-12 rounded-xl bg-abyss-card flex items-center justify-center">
            <svg className="size-6 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
              <polyline points="13 2 13 9 20 9" />
            </svg>
          </div>
          <p className="text-text-muted text-sm">No habits tracked yet</p>
          <p className="text-text-muted/50 text-xs">Add a habit above to get started</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {habits.map((habit) => (
          <div key={habit.id} className="glass rounded-2xl p-4 animate-fade-in card-depth">
            <div className="flex items-center justify-between gap-2">
              {editingId === habit.id ? (
                <input
                  type="text"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  onBlur={saveRename}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') saveRename();
                    if (e.key === 'Escape') cancelRename();
                  }}
                  className="flex-1 bg-abyss rounded-lg px-3 py-1.5 text-sm text-text-primary outline-none border border-abyss-border focus:border-neon-cyan/50 focus:glow-cyan-sm"
                  autoFocus
                />
              ) : (
                <div className="flex items-center gap-1.5 flex-1 min-w-0">
                  <button
                    type="button"
                    onClick={() => startEditing(habit)}
                    className="truncate text-sm font-semibold text-text-primary hover:text-neon-cyan transition-colors cursor-pointer"
                    title="Click to rename"
                  >
                    {habit.name}
                  </button>
                  <button
                    type="button"
                    onClick={() => startEditing(habit)}
                    className="size-7 rounded-lg bg-abyss-card-hover hover:bg-neon-cyan/20 text-text-secondary hover:text-neon-cyan flex items-center justify-center transition-all duration-200 shrink-0 cursor-pointer"
                    title="Rename habit"
                  >
                    <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </button>
                </div>
              )}
              <button
                type="button"
                onClick={() => setDeleteId(habit.id)}
                className="size-8 rounded-xl bg-abyss-card-hover hover:bg-red-500/20 text-text-secondary hover:text-red-400 flex items-center justify-center transition-all duration-200 shrink-0 cursor-pointer"
                title="Delete habit"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                </svg>
              </button>
            </div>

            <div className="mt-4 grid grid-cols-7 gap-2 max-w-xs mx-auto">
              {weekDates.map((date, i) => {
                const completed = !!habit.completions[dateKeys[i]];
                const today = isToday(date);
                return (
                  <div key={dateKeys[i]} className="flex flex-col items-center gap-2">
                    <span className={`text-xs font-medium ${
                      today ? 'text-neon-cyan' : 'text-text-muted/50'
                    }`}>
                      {DAY_NAMES[i]}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleCompletion(habit.id, dateKeys[i])}
                      className={`size-8 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${
                        completed
                          ? 'bg-neon-cyan/20 glow-cyan-sm'
                          : 'bg-abyss-card hover:bg-abyss-card-hover'
                      } ${today ? 'ring-1 ring-neon-cyan/30' : ''}`}
                    >
                      {completed ? (
                        <svg className="size-4 text-neon-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <div className="size-3 rounded-sm border border-abyss-border" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <ConfirmDialog
        open={deleteId !== null}
        title="Delete habit"
        message={`Are you sure you want to delete "${habits.find((h) => h.id === deleteId)?.name}"? This action cannot be undone.`}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteId(null)}
      />
    </>
  );
}

export default MobileCards;
