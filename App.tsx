
import React from 'react';
import Hero from './components/Hero';
import Pains from './components/Pains';
import Solutions from './components/Solutions';
import About from './components/About';
import CTASection from './components/CTASection';
import FloatingCTA from './components/FloatingCTA';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      <CustomCursor />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-black z-[100] origin-left" 
        style={{ scaleX }} 
      />
      <Navbar />
      <main>
        <Hero />
        <Pains />
        <Solutions />
        <About />
        <CTASection />
      </main>
      <FloatingCTA />
      
      <footer className="py-20 bg-white border-t border-gray-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-3xl font-serif font-bold tracking-tighter">Dress Me</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-gray-400">
            Эстетика. Система. Уверенность.
          </div>
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} Dress Me. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
