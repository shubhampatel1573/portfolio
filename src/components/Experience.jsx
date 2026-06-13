import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Frontend Developer Internship',
    company: 'Remote / Online',
    period: '1 Month',
    description: 'Developed and maintained user interfaces using React.js and Tailwind CSS. Collaborated with the team to implement responsive designs and interactive features, resulting in cleaner code and better user experiences.',
  },
  {
    title: 'President, Coding Club',
    company: 'GEC Palanpur',
    period: 'Present',
    description: 'Leading the technical and cultural college events. Organizing workshops, hackathons, and actively mentoring junior students in modern web and mobile development technologies.',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="pt-12 pb-12 relative z-10 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-[90rem] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <p className="text-xs font-['Inter'] tracking-[0.3em] uppercase text-gray-500 mb-4">Where I've been</p>
          <h2 className="text-4xl md:text-5xl font-['Anton'] uppercase tracking-wide text-white">
            My Experience
          </h2>
        </motion.div>

        {/* Experience List */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group w-full rounded-[2rem] border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-8 md:p-14 hover:border-white/[0.12] transition-colors duration-500 flex flex-col lg:flex-row gap-6 lg:gap-16 items-start lg:items-center"
            >
              
              {/* Left Column: Role & Company */}
              <div className="w-full lg:w-2/5 flex flex-col">
                <span className="inline-block mb-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#666666] font-['Inter']">
                  {exp.period}
                </span>
                <h3 className="text-2xl md:text-[2rem] font-semibold text-[#f4f4f4] font-['Inter'] leading-tight tracking-tight mb-2 group-hover:text-white transition-colors duration-300">
                  {exp.title}
                </h3>
                <h4 className="text-[1.1rem] text-[#888888] font-medium font-['Inter']">
                  {exp.company}
                </h4>
              </div>
              
              {/* Right Column: Description */}
              <div className="w-full lg:w-3/5">
                <p className="text-base md:text-lg text-[#888888] font-['Inter'] leading-relaxed">
                  {exp.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
