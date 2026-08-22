import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import LeadershipSection from './components/LeadershipSection';
import TerminalSection from './components/TerminalSection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="app dot-grid">
      <div className="ambient-glow" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <GallerySection />
        <ProjectsSection />
        <ExperienceSection />
        <LeadershipSection />
        <TerminalSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;