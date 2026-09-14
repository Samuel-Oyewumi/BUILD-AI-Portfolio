import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export default function IntakeForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenForm = () => {
      setIsOpen(true);
      
      const scrollToForm = () => {
        const el = document.getElementById('intake-form-area');
        if (el) {
          const navHeight = 80;
          const targetPosition = el.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
      };

      setTimeout(scrollToForm, 50);
      setTimeout(scrollToForm, 550);
    };

    window.addEventListener('open-intake-form', handleOpenForm);

    const handleHashChange = () => {
      if (window.location.hash === '#start') {
        handleOpenForm();
      }
    };
    
    if (window.location.hash === '#start') {
      handleOpenForm();
    }
    
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('open-intake-form', handleOpenForm);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.src = "https://www.cognitoforms.com/f/iframe.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  return (
    <section id="start" className="py-20 px-6 bg-tech-bg relative overflow-hidden">
      {/* Decorative gradient in background */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-tech-primary/10 to-transparent pointer-events-none" />
            
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 relative"
        >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-tech-primary/20 to-tech-accent/20 mb-8 shadow-lg shadow-tech-primary/20 border border-tech-highlight/20 hover:scale-110 hover:shadow-tech-primary/40 transition-all duration-300"
            >
              <ArrowUpRight className="w-8 h-8 text-tech-primary" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-tech-text mb-6 tracking-tight">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-primary to-tech-accent">beautiful</span>
            </h2>
            <p className="text-tech-highlight text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Ready to turn your business into an AI-powered system? Fill out the form below and let's get started.
            </p>
          </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] bg-tech-card shadow-[0_20px_80px_-15px_rgba(124,111,240,0.1)] border border-tech-highlight/20"
        >
          {/* Subtle gradient border effect */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-tech-primary/20 to-transparent pointer-events-none -m-[1px]" />
          
          <div id="intake-form-area" className="relative bg-tech-card rounded-[2.5rem] overflow-hidden">
            <button 
              onClick={() => {
                const willOpen = !isOpen;
                setIsOpen(willOpen);
                if (willOpen) {
                  const scrollToForm = () => {
                    const el = document.getElementById('intake-form-area');
                    if (el) {
                      const navHeight = 80;
                      const targetPosition = el.getBoundingClientRect().top + window.scrollY - navHeight;
                      window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth',
                      });
                    }
                  };
                  setTimeout(scrollToForm, 50);
                  setTimeout(scrollToForm, 550);
                }
              }}
              className="w-full flex items-center justify-between p-8 md:p-10 text-left hover:bg-tech-highlight/5 transition-colors focus:outline-none"
            >
              <span className="text-xl md:text-2xl font-display font-medium text-tech-text">
                {isOpen ? "Close Project Form" : "Open Project Form"}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-full bg-tech-bg border border-tech-highlight/20 flex items-center justify-center shrink-0 ml-4"
              >
                <ChevronDown className="w-5 h-5 text-tech-primary" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="bg-white w-full p-4 md:p-12">
                    <iframe 
                      src="https://www.cognitoforms.com/f/wZwQr8jvpE6g-0tE3XO8jg/1" 
                      allow="payment" 
                      style={{ border: 0, width: '100%', minHeight: '900px' }}
                      title="Project Intake Form"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
