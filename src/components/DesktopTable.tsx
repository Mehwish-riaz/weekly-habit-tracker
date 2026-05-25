import { useState } from 'react';
import { useHabits } from '../context/HabitContext';
import ConfirmDialog from './ConfirmDialog';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function DesktopTable() {
  const { habits, renameHabit, deleteHabit } = useHabits();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);

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

  return (
    <>
      <div className="glass rounded-2xl overflow-hidden card-depth">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left py-4 px-5 text-text-muted text-xs font-semibold uppercase tracking-widest w-44 border-b border-abyss-border">
                Habit
              </th>
              {days.map((day) => (
                <th
                  key={day}
                  className="py-4 px-3 text-center text-text-muted text-xs font-semibold uppercase tracking-widest border-b border-abyss-border"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {habits.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-16 text-center">
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
                </td>
              </tr>
            ) : (
              habits.map((habit) => (
                <tr key={habit.id} className="group border-b border-abyss-border last:border-b-0 hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-1">
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
                        <>
                          <button
                            type="button"
                            onClick={() => startEditing(habit)}
                            className="flex-1 text-sm font-medium text-text-primary hover:text-neon-cyan transition-colors text-left cursor-pointer"
                            title="Click to rename"
                          >
                            {habit.name}
                          </button>
                          <button
                            type="button"
                            onClick={() => startEditing(habit)}
                            className="size-7 rounded-lg bg-abyss-card hover:bg-neon-cyan/15 text-text-muted hover:text-neon-cyan flex items-center justify-center transition-all duration-200 cursor-pointer"
                            title="Rename habit"
                          >
                            <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                          </button>
                        </>
                      )}
                      <button
                        type="button"
                        onClick={() => setDeleteId(habit.id)}
                        className="size-7 rounded-lg bg-abyss-card hover:bg-red-500/20 text-text-muted hover:text-red-400 flex items-center justify-center transition-all duration-200 cursor-pointer"
                        title="Delete habit"
                      >
                        <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  {days.map((day) => (
                    <td key={day} className="py-3 px-3 text-center">
                      <div className="size-8 rounded-lg bg-abyss-card mx-auto flex items-center justify-center">
                        <div className="size-4 rounded-sm border border-abyss-border" />
                      </div>
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
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

export default DesktopTable;
