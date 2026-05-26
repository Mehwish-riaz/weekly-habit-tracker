import { useHabits } from '../context/HabitContext';
import { getCurrentStreakDays, getWeeklyProgress, getOverallProgress, getWeekDates } from '../utils/dates';

function StatCards() {
  const { habits } = useHabits();
  const weekDates = getWeekDates(0);
  const streak = getCurrentStreakDays(habits);
  const weekProgress = getWeeklyProgress(habits, weekDates);
  const overallProgress = getOverallProgress(habits);

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
      label: 'Current Streak Days',
      value: streak === 0 ? '—' : String(streak),
      glow: 'hover:glow-blue',
      icon: (
        <svg className="size-5 text-neon-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      iconBg: 'bg-neon-blue/10',
      streak: true,
    },
    {
      label: 'This Week Progress',
      value: weekProgress === 0 ? '—' : `${weekProgress}%`,
      glow: 'hover:glow-purple',
      icon: (
        <svg className="size-5 text-neon-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
      iconBg: 'bg-neon-purple/10',
      progressValue: weekProgress,
    },
    {
      label: 'Overall Progress',
      value: overallProgress === 0 ? '—' : `${overallProgress}%`,
      glow: 'hover:glow-cyan',
      icon: (
        <svg className="size-5 text-neon-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
      iconBg: 'bg-neon-cyan/10',
      progressValue: overallProgress,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`relative overflow-hidden glass rounded-2xl p-5 transition-all duration-400 hover-lift animate-fade-in card-depth ${stat.glow}`}
          style={{ animationDelay: `${(i + 1) * 0.1}s` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <div className={`size-10 rounded-xl ${stat.iconBg} flex items-center justify-center ring-1 ring-white/5`}>
                {stat.icon}
              </div>
              <div className="size-1.5 rounded-full bg-abyss-border" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-extrabold text-text-primary tracking-tight">{stat.value}</span>
            </div>
            <p className="text-xs text-text-muted mt-1 font-medium">{stat.label}</p>
            {stat.streak && habits.length > 1 && (
              <p className="text-[10px] text-text-muted/50 mt-0.5 tracking-wide">Strongest across {habits.length} habits</p>
            )}
            {stat.progressValue !== undefined && (
              <div className="mt-3 h-1 rounded-full bg-abyss-card overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-neon-cyan/70 to-neon-blue/70 transition-all duration-700 ease-out"
                  style={{ width: `${stat.progressValue}%` }}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatCards;
