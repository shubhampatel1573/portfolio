import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans overflow-hidden">
      <CustomCursor />
      <Navbar />
      {/* Main Content */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-[#666666] font-['Inter'] text-xs uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Shubham Patel. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
