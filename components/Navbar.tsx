
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-[100] px-6 py-8"
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center bg-white/70 backdrop-blur-3xl px-10 py-5 rounded-full border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#A39382] rounded-full shadow-[0_0_10px_#A39382]" />
          <span className="text-lg font-black tracking-tighter uppercase font-serif">Dress Me</span>
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          {['Проблемы', 'Чек-листы', 'О бренде'].map((item, i) => (
            <a 
              key={item}
              href={`#${['pains', 'solutions', 'about'][i]}`} 
              className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/40 hover:text-black transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://t.me/dress_me_shop_bot" 
          className="bg-black text-white px-8 py-4 rounded-full text-[9px] uppercase font-black tracking-widest hover:bg-[#A39382] transition-colors"
        >
          В Telegram
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
