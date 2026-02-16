
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

const Reviews: React.FC = () => {
  const reviews = [
    { name: "Анна С.", role: "CEO", text: "Система Dress Me изменила моё утро. Больше нет паники 'что надеть', только уверенность." },
    { name: "Мария П.", role: "Архитектор", text: "Аудит гардероба стал точкой роста. Я наконец-то выгляжу так, как всегда мечтала." },
    { name: "Елена В.", role: "Маркетолог", text: "Пять чек-листов — это база, которую должна знать каждая женщина. Лаконично и по делу." }
  ];

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="space-y-6"
            >
              <div className="text-[#A39382] text-4xl serif italic">“</div>
              <p className="text-lg font-light leading-relaxed text-gray-600">{rev.text}</p>
              <div>
                <div className="font-bold text-[10px] uppercase tracking-widest">{rev.name}</div>
                <div className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">{rev.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-[#A39382] selection:text-white">
      <CustomCursor />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#A39382] z-[101] origin-left" 
        style={{ scaleX }} 
      />
      <Navbar />
      <main>
        <Hero />
        <Pains />
        <Solutions />
        <About />
        <Reviews />
        <CTASection />
      </main>
      <FloatingCTA />
      
      <footer className="py-24 bg-[#FAF9F6] border-t border-gray-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <div className="text-4xl font-serif font-bold tracking-tighter mb-4">Dress Me</div>
              <p className="text-xs text-gray-400 max-w-xs leading-relaxed uppercase tracking-widest">
                Цифровая экосистема стиля для современной женщины. Создано с любовью к деталям.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-12">
              <div className="space-y-4">
                <div className="text-[10px] font-black uppercase tracking-[0.3em]">Навигация</div>
                <ul className="text-xs text-gray-500 space-y-2">
                  <li><a href="#pains" className="hover:text-black transition-colors">Проблемы</a></li>
                  <li><a href="#solutions" className="hover:text-black transition-colors">Система</a></li>
                  <li><a href="#about" className="hover:text-black transition-colors">О нас</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="text-[10px] font-black uppercase tracking-[0.3em]">Связь</div>
                <ul className="text-xs text-gray-500 space-y-2">
                  <li><a href="https://t.me/dress_me_shop_bot" className="hover:text-black transition-colors">Telegram Bot</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-gray-200/50 flex flex-col md:flex-row justify-between gap-4">
            <div className="text-[9px] uppercase tracking-widest text-gray-400">
              © {new Date().getFullYear()} Dress Me. Все права защищены.
            </div>
            <div className="text-[9px] uppercase tracking-widest text-gray-400">
              Дизайн: World-Class Engineering
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
