const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function MobileCards() {
  return (
    <div className="glass rounded-2xl p-8 text-center">
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

      <div className="mt-8 grid grid-cols-7 gap-2 max-w-xs mx-auto">
        {days.map((day, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <span className="text-xs text-text-muted/50 font-medium">{day}</span>
            <div className="size-8 rounded-lg bg-abyss-card flex items-center justify-center">
              <div className="size-3 rounded-sm border border-abyss-border" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileCards;
