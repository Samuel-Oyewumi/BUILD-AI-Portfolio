import { useState } from 'react';
import { motion } from 'motion/react';
import { projects } from '../data';
import { ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';

function ProjectCardImage({ src, alt, isPriority }: { src: string; alt: string; isPriority?: boolean }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-64 overflow-hidden bg-tech-bg/80">
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-tech-card via-tech-highlight/5 to-tech-card transition-opacity duration-700 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-pulse'
        }`} 
      />
      <img 
        src={src} 
        alt={alt} 
        loading={isPriority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={isPriority ? "high" : "auto"}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
          isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-95'
        }`}
      />
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-20 px-6 bg-tech-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 text-center flex flex-col items-center"
        >
          <div className="text-[10px] font-bold tracking-widest text-tech-primary uppercase mb-4">• Our Portfolio</div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-tech-text mb-6">
            Selected Work
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="h-full">
                <div className="group flex flex-col h-full bg-tech-card border border-tech-highlight/20 shadow-sm rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(124,111,240,0.15)] hover:border-tech-primary transition-all duration-300">
                  <ProjectCardImage 
                    src={project.imageUrl} 
                    alt={project.title} 
                    isPriority={index === 0}
                  />
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-display font-semibold text-tech-text mb-3 group-hover:text-tech-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-tech-highlight text-sm mb-6 flex-grow leading-relaxed font-light">
                      {project.description}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-tech-highlight/10 relative z-20">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-tech-primary hover:text-tech-accent transition-colors group/link relative overflow-hidden"
                      >
                        <span className="relative">
                          View live site
                          <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-tech-accent transform -translate-x-[101%] group-hover/link:translate-x-0 transition-transform duration-300 ease-out" />
                        </span>
                        <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform duration-300" />
                      </a>
                    </div>
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
