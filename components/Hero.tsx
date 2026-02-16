
import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Плавные значения для параллакса
  const y1 = useSpring(useTransform(scrollY, [0, 1000], [0, 200]), { stiffness: 50, damping: 20 });
  const y2 = useSpring(useTransform(scrollY, [0, 1000], [0, -150]), { stiffness: 50, damping: 20 });
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-40 md:pt-48 pb-24">
      <motion.div style={{ opacity, scale }} className="max-w-[1800px] mx-auto w-full px-6 md:px-12">
        
        {/* Абстрактное освещение */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#A39382]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">
          
          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-6 mb-12">
                <span className="h-[1px] w-20 bg-black/10" />
                <span className="text-[10px] uppercase font-black tracking-[0.7em] text-[#A39382] whitespace-nowrap">
                  Premium Digital Experience
                </span>
              </div>
              <h1 className="text-[14vw] lg:text-[12vw] font-black leading-[0.75] tracking-tighter uppercase mb-16 md:mb-24">
                Ваша <br />
                <span className="serif italic font-light text-[#A39382] ml-[5vw] lowercase tracking-normal">новая</span> <br />
                версия
              </h1>
            </motion.div>
          </div>

          <div className="lg:col-span-3 lg:pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.2 }}
              className="space-y-12"
            >
              <p className="text-base font-light leading-relaxed text-gray-400 max-w-xs border-l-[1px] border-[#A39382] pl-8">
                Освободите пространство для действительно важных решений. Мы превратили хаос гардероба в чистую стратегию успеха.
              </p>
              
              <div className="space-y-8">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://t.me/dress_me_shop_bot"
                  className="block bg-black text-white px-10 py-7 rounded-full text-[10px] uppercase font-bold tracking-[0.5em] text-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:bg-[#A39382] transition-all duration-700"
                >
                  Начать разбор
                </motion.a>
                <div className="flex justify-between items-center px-4 opacity-30">
                  <span className="text-[8px] uppercase font-bold tracking-widest">Scroll</span>
                  <div className="w-12 h-[1px] bg-black" />
                  <span className="text-[8px] uppercase font-bold tracking-widest">Explore</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Сетка изображений с параллаксом */}
        <div className="mt-40 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
          {[
            { img: "https://i.postimg.cc/NfLwVMGj/2026_02_16_09_21_44.jpg", y: y1 },
            { img: "https://i.postimg.cc/wT3dPvx6/2026_02_16_09_21_58.jpg", y: y2 },
            { img: "https://i.postimg.cc/ZK0hgRYY/2026_02_16_09_22_08.jpg", y: y1 },
            { img: "https://i.postimg.cc/fTkhFLWs/2026_02_16_09_22_19.jpg", y: y2 },
          ].map((item, i) => (
            <motion.div 
              key={i}
              style={{ y: item.y }}
              className={`aspect-[3/4.5] rounded-[3rem] overflow-hidden shadow-sm hover:shadow-3xl transition-all duration-1000 view-target ${i > 1 ? 'hidden lg:block' : ''} ${i % 2 !== 0 ? 'mt-24' : ''}`}
            >
              <img 
                src={item.img} 
                className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-[2s] scale-110 hover:scale-100" 
                alt="Editorial look" 
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
