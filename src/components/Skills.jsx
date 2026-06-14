import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaKey, FaShieldAlt, FaTrello } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFlutter, SiDart, SiTailwindcss, SiJavascript, SiNextdotjs, SiFirebase, SiAndroidstudio, SiMysql, SiPostman } from 'react-icons/si';

const skillSections = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Building modern, responsive web applications with the MERN stack. From pixel-perfect frontends to robust REST APIs, I deliver full-stack solutions that scale.',
    items: [
      { name: 'Next.js', icon: <SiNextdotjs size={32} className="text-white" />, detail: 'React framework for production-grade apps' },
      { name: 'React.js', icon: <FaReact size={32} className="text-[#61DAFB]" />, detail: 'Component-based UIs with hooks & state management' },
      { name: 'Node.js', icon: <FaNodeJs size={32} className="text-[#339933]" />, detail: 'Server-side JavaScript for scalable backends' },
      { name: 'Express.js', icon: <SiExpress size={32} className="text-white" />, detail: 'Fast, minimalist web framework for Node.js' },
      { name: 'MongoDB', icon: <SiMongodb size={32} className="text-[#47A248]" />, detail: 'NoSQL database for flexible data models' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} className="text-[#06B6D4]" />, detail: 'Utility-first CSS for rapid UI development' },
      { name: 'JavaScript', icon: <SiJavascript size={32} className="text-[#F7DF1E]" />, detail: 'ES6+ features, async patterns & DOM mastery' },
      { name: 'HTML5', icon: <FaHtml5 size={32} className="text-[#E34F26]" />, detail: 'Semantic markup & accessibility best practices' },
      { name: 'CSS3', icon: <FaCss3Alt size={32} className="text-[#1572B6]" />, detail: 'Animations, Grid, Flexbox & responsive design' },
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Crafting beautiful, performant cross-platform mobile applications with Flutter. Single codebase, native performance — deployed to both iOS and Android.',
    items: [
      { name: 'Flutter', icon: <SiFlutter size={32} className="text-[#02569B]" />, detail: 'Cross-platform UI toolkit for beautiful native apps' },
      { name: 'Dart', icon: <SiDart size={32} className="text-[#0175C2]" />, detail: 'Type-safe language optimized for UI development' },
      { name: 'Firebase', icon: <SiFirebase size={32} className="text-[#FFCA28]" />, detail: 'Backend-as-a-Service for rapid app development' },
      { name: 'Android Studio', icon: <SiAndroidstudio size={32} className="text-[#3DDC84]" />, detail: 'Official IDE for Android application development' },
      { name: 'Node.js', icon: <FaNodeJs size={32} className="text-[#339933]" />, detail: 'Server-side logic for mobile backend' },
      { name: 'Express.js', icon: <SiExpress size={32} className="text-white" />, detail: 'API development for mobile apps' },
      { name: 'MongoDB', icon: <SiMongodb size={32} className="text-[#47A248]" />, detail: 'Database for user data & app content' },
      { name: 'MySQL', icon: <SiMysql size={32} className="text-[#4479A1]" />, detail: 'Relational database management' },
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    description: 'Using industry-standard tools for version control, API testing, secure authentication, and agile project management to deliver reliable, well-organized software.',
    items: [
      { name: 'Git', icon: <FaGitAlt size={32} className="text-[#F05032]" />, detail: 'Branching strategies & collaborative workflows' },
      { name: 'GitHub', icon: <FaGithub size={32} className="text-white" />, detail: 'Open source contributions & project management' },
      { name: 'Postman', icon: <SiPostman size={32} className="text-[#FF6C37]" />, detail: 'API development, testing, and documentation' },
      { name: 'JWT Auth', icon: <FaKey size={32} className="text-[#00B9F1]" />, detail: 'Secure token-based authentication' },
      { name: 'OAuth 2.0', icon: <FaShieldAlt size={32} className="text-gray-300" />, detail: 'Standard protocol for authorization' },
      { name: 'Trello', icon: <FaTrello size={32} className="text-[#0052CC]" />, detail: 'Agile project management and tracking' },
    ]
  }
];

const SECTION_COUNT = skillSections.length;

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const cooldownRef = useRef(false);
  const scrollAccumulator = useRef(0);

  // Check if section is fully in viewport
  const checkInView = useCallback(() => {
    if (!sectionRef.current) return false;
    const rect = sectionRef.current.getBoundingClientRect();
    // Section top is at or above viewport top, and bottom is at or below viewport bottom
    return rect.top <= 5 && rect.bottom >= window.innerHeight - 5;
  }, []);

  // Scroll the section into full view and lock
  const lockSection = useCallback(() => {
    if (!sectionRef.current || isLocked) return;
    sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => setIsLocked(true), 400);
  }, [isLocked]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (window.innerWidth < 1024) return;
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      // Section is near the viewport — check if we should engage
      const isNearTop = rect.top <= 100 && rect.top >= -10;
      const isFullyVisible = rect.top <= 5 && rect.bottom >= window.innerHeight - 5;

      if (isNearTop && !isLocked && e.deltaY > 0 && activeIndex === 0) {
        // Scrolling down and approaching — lock it
        e.preventDefault();
        lockSection();
        return;
      }

      if (!isLocked && !isFullyVisible) return;
      if (!isLocked && isFullyVisible) {
        setIsLocked(true);
      }

      if (!isLocked) return;

      // We're locked — hijack the scroll
      if (cooldownRef.current) {
        e.preventDefault();
        return;
      }

      scrollAccumulator.current += e.deltaY;

      // Require a larger scroll amount before triggering the next slide (less sensitive)
      if (Math.abs(scrollAccumulator.current) > 150) {
        const direction = scrollAccumulator.current > 0 ? 1 : -1;
        scrollAccumulator.current = 0;

        if (direction === 1 && activeIndex < SECTION_COUNT - 1) {
          // Scroll down — next category
          e.preventDefault();
          cooldownRef.current = true;
          setIsAnimating(true);
          setActiveIndex(prev => prev + 1);
          setTimeout(() => {
            cooldownRef.current = false;
            setIsAnimating(false);
          }, 800);
        } else if (direction === -1 && activeIndex > 0) {
          // Scroll up — previous category
          e.preventDefault();
          cooldownRef.current = true;
          setIsAnimating(true);
          setActiveIndex(prev => prev - 1);
          setTimeout(() => {
            cooldownRef.current = false;
            setIsAnimating(false);
          }, 800);
        } else {
          // At boundaries — unlock and let page scroll
          setIsLocked(false);
        }
      } else {
        // Still accumulating scroll, prevent page from moving yet
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isLocked, activeIndex, lockSection, checkInView]);

  // Re-lock when scrolling back to the section
  useEffect(() => {
    const handleScroll = () => {
      if (isLocked || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top >= -5 && rect.top <= 5 && rect.bottom >= window.innerHeight) {
        setIsLocked(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLocked]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative z-10 min-h-[100dvh] py-24 lg:h-screen lg:py-0 px-6 md:px-12 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <p className="text-xs font-['Inter'] tracking-[0.3em] uppercase text-gray-500 mb-4">What I work with</p>
          <h2 className="text-4xl md:text-5xl font-['Anton'] uppercase tracking-wide text-white">
            My Skills
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">

          {/* Left: Titles */}
          <div className="w-full lg:w-[35%] flex flex-col justify-center">
            {skillSections.map((section, index) => {
              const isActive = activeIndex === index;
              return (
                <div key={section.id} className="border-t border-white/10 last:border-b">
                  <button
                    onClick={() => {
                      if (!isAnimating && index !== activeIndex) {
                        setIsAnimating(true);
                        cooldownRef.current = true;
                        setActiveIndex(index);
                        setTimeout(() => {
                          cooldownRef.current = false;
                          setIsAnimating(false);
                        }, 800);
                      }
                    }}
                    className={`w-full text-left py-5 md:py-6 cursor-none bg-transparent border-none focus:outline-none transition-all duration-500 flex items-center justify-between ${
                      isActive ? 'text-white' : 'text-gray-600 hover:text-gray-400'
                    }`}
                  >
                    <span className={`font-['Inter'] text-lg md:text-2xl font-semibold transition-all duration-500 ${
                      isActive ? 'translate-x-2' : 'translate-x-0'
                    }`}>
                      {section.title}
                    </span>
                    <span className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      isActive ? 'bg-white scale-100' : 'bg-transparent scale-0'
                    }`} />
                  </button>

                  {/* Description */}
                  <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-sm text-gray-400 font-['Inter'] leading-relaxed pb-5 md:pb-6 pr-6 max-w-sm">
                      {section.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Animated Skill Cards */}
          <div className="w-full lg:w-[65%] relative min-h-[360px] md:min-h-[400px] lg:min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
              >
                {skillSections[activeIndex].items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="group relative p-3 sm:p-4 md:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300 overflow-hidden"
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <div className="p-1.5 md:p-2 rounded-lg bg-white/5 shrink-0 [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-8 md:[&>svg]:h-8">
                        {item.icon}
                      </div>
                      <span className="text-[11px] sm:text-xs md:text-sm font-['Inter'] font-semibold text-white truncate">
                        {item.name}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs font-['Inter'] text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                      {item.detail}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Scroll progress dots */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-3">
        {skillSections.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 rounded-full transition-all duration-500 ${
              activeIndex === i ? 'h-8 bg-white' : 'h-1.5 bg-white/20'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
