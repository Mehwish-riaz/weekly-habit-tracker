function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-lg bg-neon-cyan/20 flex items-center justify-center glow-cyan">
          <svg className="size-4 text-neon-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-text-primary tracking-tight">HabitTracker</h1>
      </div>
    </header>
  );
}

export default Header;
