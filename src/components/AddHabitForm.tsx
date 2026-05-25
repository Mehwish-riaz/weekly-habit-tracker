import { useState } from 'react';
import { useHabits } from '../context/HabitContext';

function AddHabitForm() {
  const { addHabit } = useHabits();
  const [name, setName] = useState('');

  const handleSubmit = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    addHabit(trimmed);
    setName('');
  };

  return (
    <div className="glass rounded-2xl p-1 flex items-center gap-2 transition-all duration-300 focus-within:border-neon-cyan/40 focus-within:glow-cyan-sm card-depth">
      <div className="pl-4 text-text-muted">
        <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit();
        }}
        placeholder="Add a new habit..."
        className="flex-1 bg-transparent px-3 py-3 text-text-primary placeholder-text-muted/60 outline-none text-sm"
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="px-5 py-2.5 mr-1 rounded-xl bg-neon-cyan/20 text-neon-cyan text-sm font-semibold transition-all duration-300 hover:bg-neon-cyan/30 hover:glow-cyan-sm active:scale-95 cursor-pointer"
      >
        Add
      </button>
    </div>
  );
}

export default AddHabitForm;
