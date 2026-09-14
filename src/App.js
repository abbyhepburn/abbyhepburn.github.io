import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import LeadershipSection from './components/LeadershipSection';
import TerminalSection from './components/TerminalSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="app dot-grid">
      <div className="ambient-glow" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <LeadershipSection />
        <SkillsSection />
        <TerminalSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;