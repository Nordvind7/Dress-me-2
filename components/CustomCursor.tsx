
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [type, setType] = useState<'default' | 'link' | 'view' | 'text'>('default');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const hover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) setType('link');
      else if (target.closest('.view-target')) setType('view');
      else if (target.tagName === 'P' || target.tagName === 'H1' || target.tagName === 'H2') setType('text');
      else setType('default');
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', hover);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', hover);
    };
  }, []);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(pos.x, springConfig);
  const cursorY = useSpring(pos.y, springConfig);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: type === 'default' ? 12 : type === 'view' ? 100 : type === 'text' ? 40 : 80,
          height: type === 'default' ? 12 : type === 'view' ? 100 : type === 'text' ? 40 : 80,
          backgroundColor: "#fff"
        }}
      >
        <AnimatePresence>
          {type === 'view' && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[10px] uppercase font-black tracking-widest text-black"
            >
              Смотреть
            </motion.span>
          )}
          {type === 'link' && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="w-2 h-2 bg-black rounded-full"
            />
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Маленькая точка преследования */}
      <motion.div 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#A39382] rounded-full pointer-events-none z-[10000]"
        animate={{ x: pos.x - 3, y: pos.y - 3 }}
        transition={{ type: 'spring', damping: 20, stiffness: 500, mass: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
