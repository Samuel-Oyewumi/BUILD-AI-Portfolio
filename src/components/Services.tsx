import React from 'react';
import { motion } from 'motion/react';
import { services } from '../data';
import { Cpu, Magnet, ShoppingCart, Activity } from 'lucide-react';
import TiltCard from './TiltCard';

const iconMap: Record<string, React.ReactNode> = {
  'cpu': <Cpu className="w-6 h-6 text-tech-primary" />,
  'magnet': <Magnet className="w-6 h-6 text-tech-primary" />,
  'shopping-cart': <ShoppingCart className="w-6 h-6 text-tech-primary" />,
  'activity': <Activity className="w-6 h-6 text-tech-primary" />
};

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-tech-card relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-tech-primary/10 rounded-full blur-[120px] pointer-events-none will-change-transform" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 flex flex-col items-center"
        >
          <div className="text-[10px] font-bold tracking-widest text-tech-accent uppercase mb-4">• About Us</div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-tech-text mb-6 leading-tight max-w-4xl">
            A global partner dedicated to building <span className="text-tech-primary">smarter</span> and <span className="text-tech-accent">more adaptive</span> systems.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="h-full">
                <div className="flex gap-6 p-8 rounded-3xl bg-tech-bg border border-tech-highlight/20 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(124,111,240,0.15)] hover:border-tech-primary transition-all duration-300 h-full group">
                  <div className="shrink-0 relative z-20">
                    <div className="w-14 h-14 rounded-2xl bg-tech-card border border-tech-highlight/20 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      {iconMap[service.icon]}
                    </div>
                  </div>
                  
                  <div className="relative z-20">
                    <h3 className="text-xl font-display font-semibold text-tech-text mb-3 group-hover:text-tech-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-tech-highlight leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
