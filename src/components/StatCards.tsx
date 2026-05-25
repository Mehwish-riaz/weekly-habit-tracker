import { useHabits } from '../context/HabitContext';

function StatCards() {
  const { habits } = useHabits();

  const stats = [
    {
      label: 'Total Habits',
      value: habits.length === 0 ? '—' : String(habits.length),
      glow: 'hover:glow-cyan',
      icon: (
        <svg className="size-5 text-neon-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="M9 14l2 2 4-4" />
        </svg>
      ),
      iconBg: 'bg-neon-cyan/10',
    },
    {
      label: 'Current Streak',
      value: '—',
      glow: 'hover:glow-blue',
      icon: (
        <svg className="size-5 text-neon-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      iconBg: 'bg-neon-blue/10',
    },
    {
      label: 'Weekly Progress',
      value: '—%',
      glow: 'hover:glow-purple',
      icon: (
        <svg className="size-5 text-neon-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      iconBg: 'bg-neon-purple/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`glass rounded-2xl p-6 transition-all duration-300 hover:glass-hover hover:translate-y-[-2px] animate-fade-in card-depth ${stat.glow}`}
          style={{ animationDelay: `${(i + 1) * 0.1}s` }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`size-10 rounded-xl ${stat.iconBg} flex items-center justify-center`}>
              {stat.icon}
            </div>
          </div>
          <p className="text-3xl font-bold text-text-primary tracking-tight">{stat.value}</p>
          <p className="text-sm text-text-muted mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default StatCards;
