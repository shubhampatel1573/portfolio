import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  // Page 1
  {
    title: 'Wanderlust (Airbnb Clone)',
    description: 'A full-stack property rental platform featuring secure user authentication, interactive maps, and complete booking functionality.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/shubhampatel1573/wanderlust',
    demo: 'https://wanderlust-g6y5.onrender.com/listings',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Music Streaming (Spotify Clone)',
    description: 'A web-based music player focusing on modern UI/UX, responsive design, and dynamic audio playback.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GitHub API'],
    github: 'https://github.com/shubhampatel1573/Spotify',
    demo: 'https://spotify-clone-ten-pi-96.vercel.app/',
    image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Praxis Website',
    description: 'Official website for GEC Palanpur\'s cultural & technical event. Features animations and event registration.',
    tech: ['React.js', 'Tailwind CSS', 'Google Sheet API', 'Hostinger'],
    github: 'https://github.com/shubhampatel1573/praxes',
    demo: 'https://praxes.vercel.app/',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
  },
];

const ITEMS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(projects.length / ITEMS_PER_PAGE);

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const currentProjects = projects.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const goNext = () => {
    if (currentPage < TOTAL_PAGES - 1) setCurrentPage(prev => prev + 1);
  };

  const goPrev = () => {
    if (currentPage > 0) setCurrentPage(prev => prev - 1);
  };

  return (
    <section id="projects" className="pt-12 md:pt-16 lg:pt-20 pb-12 relative z-10 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-[100rem] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20 text-center"
        >
          <p className="text-xs font-['Inter'] tracking-[0.3em] uppercase text-gray-500 mb-4">What I've built</p>
          <h2 className="text-4xl md:text-5xl font-['Anton'] uppercase tracking-wide text-white">
            Featured Projects
          </h2>
        </motion.div>

        {/* Project Cards Grid with AnimatePresence */}
        <div className="min-h-[700px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="group flex flex-col"
                >
                  {/* Card Container */}
                  <a 
                    href={project.demo !== '#' ? project.demo : undefined}
                    target={project.demo !== '#' ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="w-full rounded-[2.5rem] border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden aspect-[4/4.5] relative mb-6 hover:border-white/[0.12] transition-colors duration-500 flex items-center justify-center p-8 md:p-16 cursor-none"
                  >
                    
                    {/* Floating Image */}
                    <div className="w-full h-[85%] relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform group-hover:scale-[1.03] group-hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                       <img 
                         src={project.image} 
                         alt={project.title} 
                         className="w-full h-full object-cover"
                       />
                    </div>
                  </a>
                  
                  {/* Text Description & Links */}
                  <div className="px-2 md:px-4">
                    <p className="text-base md:text-[1.1rem] text-[#888888] font-['Inter'] leading-relaxed tracking-tight mb-5">
                      <span className="font-semibold text-[#f4f4f4]">{project.title}. </span>
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 text-[11px] uppercase tracking-wider font-semibold font-['Inter'] bg-white/[0.03] border border-white/[0.08] rounded-full text-[#a3a3a3]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex items-center gap-5">
                      <a 
                        href={project.github}
                        className="flex items-center gap-2 text-sm font-['Inter'] text-[#888888] hover:text-[#f4f4f4] transition-colors cursor-none"
                      >
                        <FaGithub size={16} />
                        <span>Code</span>
                      </a>
                      <a 
                        href={project.demo}
                        className="flex items-center gap-2 text-sm font-['Inter'] text-[#888888] hover:text-white transition-colors cursor-none"
                      >
                        <FaExternalLinkAlt size={14} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation Dots & Arrows */}
        {TOTAL_PAGES > 1 && (
          <div className="mt-20 flex items-center justify-between px-4">
            <div className="flex-1" />
            
            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 cursor-none ${
                    currentPage === i ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex-1 flex justify-end gap-3">
              <button 
                onClick={goPrev}
                className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-colors cursor-none ${
                  currentPage === 0 ? 'text-white/20 cursor-not-allowed' : 'text-white/50 hover:text-white hover:bg-white/10'
                }`}
              >
                <FaChevronLeft size={14} />
              </button>
              <button 
                onClick={goNext}
                className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-colors cursor-none ${
                  currentPage === TOTAL_PAGES - 1 ? 'text-white/20 cursor-not-allowed' : 'text-white/50 hover:text-white hover:bg-white/10'
                }`}
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
