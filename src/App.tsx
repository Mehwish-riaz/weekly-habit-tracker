import Header from './components/Header';
import Hero from './components/Hero';
import StatCards from './components/StatCards';
import AddHabitForm from './components/AddHabitForm';
import WeekNavigation from './components/WeekNavigation';
import DesktopTable from './components/DesktopTable';
import MobileCards from './components/MobileCards';

function App() {
  return (
    <div className="min-h-dvh max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />

      <main className="pb-16 space-y-6">
        <Hero />
        <StatCards />
        <AddHabitForm />
        <WeekNavigation />

        <div className="hidden md:block">
          <DesktopTable />
        </div>
        <div className="md:hidden">
          <MobileCards />
        </div>
      </main>
    </div>
  );
}

export default App;
