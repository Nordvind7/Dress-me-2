
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [type, setType] = useState<'default' | 'link' | 'view'>('default');

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const hover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) setType('link');
      else if (target.closest('.view-target')) setType('view');
      else setType('default');
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', hover);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', hover);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
      animate={{
        x: pos.x - (type === 'default' ? 6 : 40),
        y: pos.y - (type === 'default' ? 6 : 40),
        width: type === 'default' ? 12 : 80,
        height: type === 'default' ? 12 : 80,
        backgroundColor: type === 'default' ? '#fff' : '#fff'
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.6 }}
    >
      <AnimatePresence>
        {type === 'view' && (
          <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="text-[10px] uppercase font-black tracking-tighter text-black"
          >
            Смотреть
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CustomCursor;
