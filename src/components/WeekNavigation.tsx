function WeekNavigation() {
  return (
    <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between card-depth">
      <button
        type="button"
        className="size-9 rounded-xl bg-abyss-card hover:bg-abyss-card-hover text-text-secondary hover:text-text-primary flex items-center justify-center transition-all duration-200 cursor-pointer"
      >
        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="flex items-center gap-2">
        <svg className="size-4 text-neon-cyan/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span className="text-text-primary text-sm font-semibold tracking-tight select-none">
          May 25 — May 31, 2026
        </span>
      </div>

      <button
        type="button"
        className="size-9 rounded-xl bg-abyss-card hover:bg-abyss-card-hover text-text-secondary hover:text-text-primary flex items-center justify-center transition-all duration-200 cursor-pointer"
      >
        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

export default WeekNavigation;
