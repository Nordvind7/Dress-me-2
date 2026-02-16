
import React from 'react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-black text-white text-center overflow-hidden relative">
      {/* Background Animated Orb */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-block text-[10px] uppercase tracking-[0.6em] mb-12 text-white/40"
        >
          Ваш путь начинается здесь
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-16"
        >
          STYLE <br />
          <span className="serif italic font-light text-white/20">SYSTEM</span>
        </motion.h2>

        <p className="text-xl md:text-2xl text-white/50 mb-20 font-light leading-relaxed max-w-2xl mx-auto">
          Получите доступ к закрытой базе знаний и начните транслировать уверенность через свой образ.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <a 
            href="https://t.me/dress_me_shop_bot"
            className="block px-16 py-8 bg-white text-black text-xs uppercase tracking-[0.4em] font-black hover:bg-gray-200 transition-all rounded-full"
          >
            Получить 5 чек-листов
          </a>
        </motion.div>
        
        <p className="mt-12 text-[10px] uppercase tracking-widest text-white/20">
          * Запись на бесплатный разбор доступна внутри
        </p>
      </div>
    </section>
  );
};

export default CTASection;
