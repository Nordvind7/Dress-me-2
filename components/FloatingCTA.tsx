
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-8 left-0 right-0 z-50 px-6 pointer-events-none lg:hidden"
        >
          <a
            href="https://t.me/dress_me_shop_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto flex items-center justify-center gap-3 w-full max-w-md mx-auto bg-black text-white py-5 rounded-2xl shadow-2xl text-xs uppercase tracking-[0.2em] font-bold"
          >
            <Download size={18} />
            Скачать чек-листы (TG)
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
