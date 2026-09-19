import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import logoImage from '../assets/logo.webp';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-tech-card border-b border-tech-highlight/20 py-4 shadow-sm text-tech-text' 
            : 'bg-transparent py-6 text-tech-text'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3.5 group shrink-0">
            <img 
              src={logoImage} 
              alt="BUILD AI Logo" 
              className="h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-md" 
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <span className="font-display font-semibold tracking-wide text-xl md:text-2xl">BUILD AI</span>
          </a>
          
          <div className={`hidden md:flex items-center gap-10 text-xs font-bold tracking-widest uppercase transition-colors duration-500 ${isScrolled ? 'text-tech-highlight' : 'text-tech-text'}`}>
            <a href="#home" className="relative group overflow-hidden">
              <span className="transition-colors group-hover:text-tech-primary">Home</span>
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-tech-primary transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </a>
            <a href="#work" className="relative group overflow-hidden">
              <span className="transition-colors group-hover:text-tech-primary">Work</span>
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-tech-primary transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </a>
            <a href="#services" className="relative group overflow-hidden">
              <span className="transition-colors group-hover:text-tech-primary">Services</span>
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-tech-primary transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </a>
          </div>

          <div className="shrink-0 hidden md:block">
            <motion.a 
              href="#start" 
              onClick={(e) => {
                const el = document.getElementById('start');
                if (el) {
                  e.preventDefault();
                  window.dispatchEvent(new Event('open-intake-form'));
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="px-6 py-2.5 rounded-full bg-tech-primary text-white text-xs font-bold tracking-widest uppercase hover:brightness-110 shadow-md hover:shadow-[0_0_15px_rgba(124,111,240,0.4)] transition-all block"
            >
              Start Project
            </motion.a>
          </div>

          <button 
            className="md:hidden p-2 text-tech-text hover:text-tech-primary transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-tech-bg/95 backdrop-blur-xl md:hidden flex flex-col"
          >
            <div className="flex justify-end p-6 py-8">
              <button 
                className="p-2 text-tech-text hover:text-tech-primary transition-colors focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center flex-grow gap-10">
              <a 
                href="#home" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-display font-medium text-tech-text hover:text-tech-primary transition-colors"
              >
                Home
              </a>
              <a 
                href="#work" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-display font-medium text-tech-text hover:text-tech-primary transition-colors"
              >
                Work
              </a>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-display font-medium text-tech-text hover:text-tech-primary transition-colors"
              >
                Services
              </a>
              
              <a 
                href="#start" 
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    window.dispatchEvent(new Event('open-intake-form'));
                  }, 300);
                }}
                className="mt-8 px-8 py-4 rounded-full bg-tech-primary text-white text-sm font-bold tracking-widest uppercase hover:brightness-110 shadow-lg shadow-tech-primary/20"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
