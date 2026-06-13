import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Hero = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavClick = (targetId) => {
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

  // Animation variants
  const revealVariants = {
    hidden: { height: "0vh", borderTopLeftRadius: "100%", borderTopRightRadius: "100%" },
    visible: { 
      height: "100vh", 
      borderTopLeftRadius: "0%", 
      borderTopRightRadius: "0%",
      transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.0,
      }
    }
  };

  const textItem = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: "0%", 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  const fadeItem = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 1, ease: "easeOut", delay: 1.8 } 
    }
  };

  return (
    <>
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

      <section className="relative w-full h-screen overflow-hidden bg-[#e0e0e0]">
        {/* Expanding Black Background */}
        <motion.div 
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-0 left-0 w-full bg-[#0a0a0a] z-0"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center text-[#f4f4f4] px-8 md:px-12">
          
          {/* Top Horizontal Navigation */}
          <motion.nav 
            variants={fadeItem} 
            initial="hidden" 
            animate="visible" 
            className="absolute top-6 md:top-8 left-0 w-full px-6 md:px-12 flex flex-row justify-between items-center z-50"
          >
            <div className="font-['Inter'] tracking-[0.3em] md:tracking-[0.4em] text-xs md:text-sm uppercase text-white font-bold">
              SHUBHAM
            </div>
            <div className="flex gap-4 md:gap-10 text-[11px] md:text-sm font-['Inter'] font-medium cursor-none">
              <button onClick={() => handleNavClick('skills')} className="hover:text-gray-300 transition-colors cursor-none bg-transparent border-none text-white focus:outline-none">Skills</button>
              <button onClick={() => handleNavClick('projects')} className="hover:text-gray-300 transition-colors cursor-none bg-transparent border-none text-white focus:outline-none">Projects</button>
              <button onClick={() => handleNavClick('experience')} className="hover:text-gray-300 transition-colors cursor-none bg-transparent border-none text-white focus:outline-none hidden sm:block">Experience</button>
              <button onClick={() => handleNavClick('contact')} className="hover:text-gray-300 transition-colors cursor-none bg-transparent border-none text-white focus:outline-none">Contact</button>
            </div>
          </motion.nav>

          {/* Main Typography */}
          <motion.div 
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[90rem] mx-auto flex flex-col justify-center h-full relative z-10 px-0 md:px-4 gap-4 md:gap-6 lg:gap-12 mt-8 md:mt-0"
          >
            {/* Row 1 */}
            <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end mb-4 lg:mb-2">
              <div className="overflow-hidden">
                <motion.h1 
                  variants={textItem}
                  className="text-[clamp(2.2rem,7.5vw,9rem)] leading-[0.85] md:leading-[0.9] font-['Anton'] uppercase m-0 tracking-wide text-white"
                >
                  HI ! I'M SHUBHAM
                </motion.h1>
              </div>
              
              <motion.div 
                variants={fadeItem}
                className="hidden lg:block w-64 xl:w-72 text-xs xl:text-sm text-gray-400 font-sans leading-relaxed tracking-wide text-left mb-2 shrink-0 ml-8"
              >
                Transforming Ideas into Scalable Web & Mobile Products.
              </motion.div>
              <motion.p
                variants={fadeItem}
                className="block lg:hidden text-xs text-gray-400 font-sans leading-relaxed tracking-wide mt-2"
              >
                Transforming Ideas into Scalable Web & Mobile Products.
              </motion.p>
            </div>

            {/* Row 2 */}
            <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-start">
              <motion.div 
                variants={fadeItem}
                className="hidden lg:block w-64 xl:w-72 text-xs xl:text-sm text-gray-400 font-sans leading-relaxed tracking-wide text-left mt-4 shrink-0 mr-8"
              >
                I've worked with some of the most ambitious technologies such as React, Node.js, MongoDB, Flutter, and many more.
              </motion.div>
              
              <div className="overflow-hidden lg:ml-auto">
                <motion.h1 
                  variants={textItem}
                  className="text-[clamp(1.8rem,6.5vw,8rem)] leading-[0.85] md:leading-[0.9] font-['Anton'] uppercase m-0 text-white/95 tracking-wide"
                >
                  FULL STACK DEVELOPER
                </motion.h1>
              </div>
            </div>
          </motion.div>

          {/* Bottom indicator */}
          <motion.div 
            variants={fadeItem} 
            initial="hidden" 
            animate="visible" 
            className="absolute bottom-16 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:gap-6"
          >
            <button onClick={() => handleNavClick('projects')} className="text-[10px] tracking-[0.3em] uppercase font-sans font-semibold cursor-none hover:text-neon-cyan transition-colors bg-transparent border-none text-white focus:outline-none">
              Scroll down
            </button>
            <div className="w-px h-8 md:h-16 bg-white/30" />
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Hero;
