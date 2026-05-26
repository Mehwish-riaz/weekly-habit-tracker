function Hero() {
  return (
    <section className="text-center py-12 md:py-16 animate-fade-in">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-cyan/5 border border-neon-cyan/10 text-neon-cyan text-xs font-semibold tracking-wide mb-6">
        <span className="size-1.5 rounded-full bg-neon-cyan animate-pulse-glow" />
        Weekly Tracker
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-tight">
        <span className="bg-gradient-to-r from-neon-cyan via-white to-neon-purple bg-clip-text text-transparent">
          Track Your Habits
        </span>
      </h2>
      <p className="text-text-secondary text-lg md:text-xl mt-4 max-w-md mx-auto leading-relaxed">
        Build streaks, stay consistent. Your weekly progress at a glance.
      </p>
    </section>
  );
}

export default Hero;
