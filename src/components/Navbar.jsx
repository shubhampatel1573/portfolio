import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState, useRef } from 'react';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const heroHeight = window.innerHeight;
    
    if (latest > heroHeight) {
      setPastHero(true);
      if (latest < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    } else {
      setPastHero(false);
      setVisible(false);
    }

    lastScrollY.current = latest;
  });

  const handleNavClick = (targetId) => {
    setIsOpen(false);
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const topPos = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: topPos, behavior: 'instant' });
      }
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <>
      {/* Purple page transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ top: "-100vh" }}
            animate={{ top: "0vh" }}
            exit={{ top: "100vh" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed left-0 w-full h-screen bg-[#7c3aed] z-[100] mix-blend-screen pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 w-full h-screen bg-[#0a0a0a]/98 backdrop-blur-xl z-[85] flex flex-col items-center justify-center gap-8"
          >
            <button onClick={() => handleNavClick('skills')} className="text-4xl md:text-6xl font-['Anton'] uppercase text-white hover:text-[#a855f7] transition-colors cursor-none bg-transparent border-none focus:outline-none tracking-wider">Skills</button>
            <button onClick={() => handleNavClick('projects')} className="text-4xl md:text-6xl font-['Anton'] uppercase text-white hover:text-[#a855f7] transition-colors cursor-none bg-transparent border-none focus:outline-none tracking-wider">Projects</button>
            <button onClick={() => handleNavClick('experience')} className="text-4xl md:text-6xl font-['Anton'] uppercase text-white hover:text-[#a855f7] transition-colors cursor-none bg-transparent border-none focus:outline-none tracking-wider">Experience</button>
            <button onClick={() => handleNavClick('contact')} className="text-4xl md:text-6xl font-['Anton'] uppercase text-white hover:text-[#a855f7] transition-colors cursor-none bg-transparent border-none focus:outline-none tracking-wider">Contact</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <motion.nav
        initial={{ y: '-100%' }}
        animate={{ y: visible && pastHero ? '0%' : '-100%' }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 w-full z-[90] px-6 md:px-12 py-5 flex justify-between items-center backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/[0.06]"
      >
        <button 
          onClick={() => {
            setIsOpen(false);
            if (isTransitioning) return;
            setIsTransitioning(true);
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'instant' });
              setIsTransitioning(false);
            }, 800);
          }}
          className="font-['Inter'] tracking-[0.4em] text-sm uppercase text-white font-bold bg-transparent border-none cursor-none focus:outline-none"
        >
          SHUBHAM
        </button>
        <div className="hidden md:flex gap-10 text-sm font-['Inter'] font-medium">
          <button onClick={() => handleNavClick('skills')} className="hover:text-gray-400 transition-colors cursor-none bg-transparent border-none text-white focus:outline-none">Skills</button>
          <button onClick={() => handleNavClick('projects')} className="hover:text-gray-400 transition-colors cursor-none bg-transparent border-none text-white focus:outline-none">Projects</button>
          <button onClick={() => handleNavClick('experience')} className="hover:text-gray-400 transition-colors cursor-none bg-transparent border-none text-white focus:outline-none">Experience</button>
          <button onClick={() => handleNavClick('contact')} className="hover:text-gray-400 transition-colors cursor-none bg-transparent border-none text-white focus:outline-none">Contact</button>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10 z-[100] cursor-none bg-transparent border-none focus:outline-none"
        >
          <motion.div animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-6 h-[2px] bg-white origin-center transition-all" />
          <motion.div animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-[2px] bg-white transition-all" />
          <motion.div animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-[2px] bg-white origin-center transition-all" />
        </button>
      </motion.nav>
    </>
  );
};

export default Navbar;
