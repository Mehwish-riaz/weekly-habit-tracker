function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <div className="size-9 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-blue/10 flex items-center justify-center glow-cyan ring-1 ring-neon-cyan/20">
          <svg className="size-4.5 text-neon-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-text-primary tracking-tight">
          <span className="bg-gradient-to-r from-neon-cyan to-white bg-clip-text text-transparent">Habit</span>Tracker
        </h1>
      </div>
    </header>
  );
}

export default Header;
