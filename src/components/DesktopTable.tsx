const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function DesktopTable() {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left py-4 px-5 text-text-muted text-xs font-semibold uppercase tracking-widest w-40 border-b border-abyss-border">
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
        </tbody>
      </table>
    </div>
  );
}

export default DesktopTable;
