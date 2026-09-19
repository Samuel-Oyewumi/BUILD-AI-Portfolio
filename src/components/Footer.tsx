import { useState } from 'react';
import Logo from './Logo';
import logoImage from '../assets/logo.png';

export default function Footer() {

  return (
    <footer className="bg-tech-card border-t border-tech-highlight/20 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3.5 mb-6">
              <img 
                src={logoImage} 
                alt="BUILD AI Logo" 
                className="h-10 md:h-11 w-auto object-contain rounded-md" 
              />
              <span className="text-tech-text font-display font-semibold tracking-wide text-xl md:text-2xl">BUILD AI</span>
            </div>
            <p className="text-tech-highlight max-w-sm mb-6 leading-relaxed font-light">
              AI-powered systems for businesses, built to scale, attract, and convert.
            </p>
            <a 
              href="mailto:hello@buildai.com" 
              className="text-tech-primary hover:text-tech-accent transition-colors font-medium"
            >
              hello@buildai.com
            </a>
          </div>
          
          <div className="flex flex-col md:items-end justify-center">
            <a 
              href="#start" 
              onClick={(e) => {
                const el = document.getElementById('start');
                if (el) {
                  e.preventDefault();
                  window.dispatchEvent(new Event('open-intake-form'));
                }
              }}
              className="px-6 py-3 rounded-full bg-tech-primary text-tech-text font-bold text-xs tracking-widest uppercase hover:brightness-110 transition-all text-center max-w-[200px] shadow-md hover:shadow-[0_0_15px_rgba(124,111,240,0.4)]"
            >
              Start a project
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-tech-highlight/20 text-xs font-medium text-tech-highlight uppercase tracking-wider">
          <p>© {new Date().getFullYear()} BUILD AI. All rights reserved.</p>
          <div className="flex items-center gap-8 mt-4 md:mt-0">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-tech-primary transition-colors">Instagram</a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-tech-primary transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-tech-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-tech-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
