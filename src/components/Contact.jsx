import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.target);
    formData.append("access_key", "ef3d8fe4-c4bb-4c24-822e-3a65c385b91e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="pt-12 pb-32 relative z-10 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-[90rem] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <p className="text-xs font-['Inter'] tracking-[0.3em] uppercase text-gray-500 mb-4">What's next?</p>
          <h2 className="text-4xl md:text-5xl font-['Anton'] uppercase tracking-wide text-white">
            Get In Touch
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 max-w-6xl mx-auto">
          
          {/* Left Side: Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:w-1/2 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl md:text-[3rem] font-semibold text-[#f4f4f4] font-['Inter'] leading-tight tracking-tight mb-6">
                Let's build something <br className="hidden md:block"/>
                <span className="text-[#666666]">amazing together.</span>
              </h3>
              <p className="text-base md:text-lg text-[#888888] font-['Inter'] leading-relaxed mb-12 max-w-md">
                Whether you have a question, a project idea, or just want to say hi, I'm always open to new opportunities and collaborations.
              </p>
            </div>
            
            <div className="space-y-10">
              <div>
                <p className="text-[11px] font-['Inter'] font-semibold text-[#666666] tracking-[0.2em] uppercase mb-3">Email me at</p>
                <a href="mailto:shubhampatel.co@gmail.com" className="text-xl md:text-2xl font-['Inter'] font-medium text-white hover:text-[#888888] transition-colors cursor-none">
                  shubhampatel.co@gmail.com
                </a>
              </div>
              
              <div>
                <p className="text-[11px] font-['Inter'] font-semibold text-[#666666] tracking-[0.2em] uppercase mb-4">Follow me</p>
                <div className="flex gap-4">
                  <a href="https://github.com/shubhampatel1573" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#888888] hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-none">
                    <FaGithub size={22} />
                  </a>
                  <a href="https://www.linkedin.com/in/shubhampatel1573/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#888888] hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-none">
                    <FaLinkedin size={22} />
                  </a>
                  <a href="mailto:shubhampatel.co@gmail.com" className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#888888] hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-none">
                    <FaEnvelope size={22} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:w-1/2"
          >
            <div className="w-full rounded-[2.5rem] border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-8 md:p-12 lg:p-14 hover:border-white/[0.12] transition-colors duration-500">
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#666666] font-['Inter']">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Your Name"
                      required
                      className="bg-transparent border-b border-white/10 px-0 py-2 text-white font-['Inter'] focus:outline-none focus:border-white/50 transition-colors placeholder-white/20 cursor-none"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#666666] font-['Inter']">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="Your Email"
                      required
                      className="bg-transparent border-b border-white/10 px-0 py-2 text-white font-['Inter'] focus:outline-none focus:border-white/50 transition-colors placeholder-white/20 cursor-none"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="mobile" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#666666] font-['Inter']">Mobile No</label>
                    <input 
                      type="tel" 
                      id="mobile" 
                      name="mobile" 
                      placeholder="Your Phone Number"
                      className="bg-transparent border-b border-white/10 px-0 py-2 text-white font-['Inter'] focus:outline-none focus:border-white/50 transition-colors placeholder-white/20 cursor-none"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <label htmlFor="subject" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#666666] font-['Inter']">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      placeholder="Project Inquiry"
                      required
                      className="bg-transparent border-b border-white/10 px-0 py-2 text-white font-['Inter'] focus:outline-none focus:border-white/50 transition-colors placeholder-white/20 cursor-none"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <label htmlFor="message" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#666666] font-['Inter']">Message</label>
                  <textarea 
                    id="message" 
                    rows="4"
                    name="message" 
                    placeholder="Tell me about your project..."
                    required
                    className="bg-transparent border-b border-white/10 px-0 py-2 text-white font-['Inter'] focus:outline-none focus:border-white/50 transition-colors placeholder-white/20 resize-none cursor-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-6 flex items-center justify-center gap-3 bg-white text-black font-semibold font-['Inter'] py-4 md:py-5 rounded-2xl hover:bg-gray-200 transition-colors cursor-none group disabled:opacity-80"
                >
                  {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error. Try Again.' : 'Send Message'}
                  {status === 'idle' && <FaArrowRight className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
