import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-32 pb-10 bg-tech-bg">
      {/* Animated glowing orbs in background with parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[500px] bg-tech-primary/10 rounded-full blur-[100px] pointer-events-none will-change-transform" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[600px] bg-tech-accent/5 rounded-full blur-[120px] pointer-events-none will-change-transform" 
      />

      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col items-center text-center mt-12 md:mt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tech-card border border-tech-primary/30 shadow-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-tech-accent animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-tech-primary uppercase">Next-generation systems</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-[84px] font-display font-medium tracking-tight text-tech-text mb-8 leading-[1.1] max-w-5xl relative"
        >
          {/* Subtle gradient glow behind text */}
          <div
            className="absolute inset-0 z-[-1] bg-gradient-to-r from-tech-primary/20 via-tech-accent/20 to-tech-primary/20 blur-3xl rounded-full transform-gpu"
          />
          Building the future with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-primary to-tech-accent">AI and strategy</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-tech-highlight max-w-3xl mb-12 leading-relaxed font-light"
        >
          We build intelligent systems and modern websites designed to scale your business, attract customers, and automate your workflow.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-24"
        >
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
            className="px-8 py-4 rounded-full bg-tech-primary text-tech-text font-bold text-sm tracking-widest uppercase hover:brightness-110 hover:shadow-[0_0_20px_rgba(124,111,240,0.4)] flex items-center gap-3 group relative overflow-hidden"
          >
            Start a Project
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.a>
          <motion.a 
            href="#work" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="px-8 py-4 rounded-full bg-tech-card border border-tech-highlight/20 text-tech-text font-bold text-sm tracking-widest uppercase hover:bg-tech-card/80 hover:border-tech-primary hover:text-tech-primary transition-colors shadow-sm hover:shadow-[0_0_15px_rgba(124,111,240,0.2)]"
          >
            View Work
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
