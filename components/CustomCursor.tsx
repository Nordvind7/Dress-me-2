
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 40, stiffness: 400, mass: 0.2 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [type, setType] = useState<'default' | 'link' | 'view'>('default');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setType('link');
      } else if (target.closest('.view-target')) {
        setType('view');
      } else {
        setType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      {/* Главный круг */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: type === 'default' ? 10 : type === 'view' ? 100 : 70,
          height: type === 'default' ? 10 : type === 'view' ? 100 : 70,
          backgroundColor: "#fff"
        }}
        transition={{ type: 'spring', ...springConfig }}
      >
        <AnimatePresence mode="wait">
          {type === 'view' && (
            <motion.span
              key="view"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-[10px] uppercase font-black tracking-widest text-black"
            >
              LOOK
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Точка следования без пружины для резкости */}
      <motion.div 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#A39382] rounded-full pointer-events-none z-[10000]"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
};

export default CustomCursor;
