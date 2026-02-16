
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 180]);
  const y2 = useTransform(scrollY, [0, 800], [0, -120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-48 pb-24">
      <div className="max-w-[1800px] mx-auto w-full px-6">
        
        {/* Декоративные пятна света */}
        <motion.div 
          style={{ opacity }}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#A39382]/5 rounded-full blur-[140px] pointer-events-none z-0"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
          
          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-6 mb-10">
                <span className="h-[1px] w-16 bg-black/10" />
                <span className="text-[10px] uppercase font-black tracking-[0.6em] text-[#A39382]">
                  The New Standard of Elegance
                </span>
              </div>
              <h1 className="text-[14vw] lg:text-[11.5vw] font-black leading-[0.78] tracking-tighter uppercase mb-20">
                Ваш <br />
                <span className="serif italic font-light lowercase text-[#A39382] ml-[6vw]">персональный</span> <br />
                стиль
              </h1>
            </motion.div>
          </div>

          <div className="lg:col-span-3 lg:mt-32">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 1.2 }}
              className="space-y-12"
            >
              <p className="text-sm font-light leading-relaxed text-gray-500 max-w-xs border-l-2 border-[#A39382]/20 pl-6">
                Мы создали систему, в которой стиль — это не удача, а алгоритм. Достигайте большего, выглядя безупречно.
              </p>
              
              <div className="space-y-6">
                <motion.a
                  whileHover={{ scale: 1.02, backgroundColor: "#A39382" }}
                  whileTap={{ scale: 0.98 }}
                  href="https://t.me/dress_me_shop_bot"
                  className="block bg-black text-white px-12 py-7 rounded-full text-[10px] uppercase font-bold tracking-[0.4em] text-center transition-all duration-500 shadow-xl shadow-black/5"
                >
                  Начать разбор
                </motion.a>
                <div className="flex justify-center gap-2 opacity-20">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-[1px] bg-black" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Параллакс-сетка изображений */}
        <div className="mt-40 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {[
            { img: "https://i.postimg.cc/NfLwVMGj/2026_02_16_09_21_44.jpg", y: y1 },
            { img: "https://i.postimg.cc/wT3dPvx6/2026_02_16_09_21_58.jpg", y: y2 },
            { img: "https://i.postimg.cc/ZK0hgRYY/2026_02_16_09_22_08.jpg", y: y1 },
            { img: "https://i.postimg.cc/fTkhFLWs/2026_02_16_09_22_19.jpg", y: y2 },
          ].map((item, i) => (
            <motion.div 
              key={i}
              style={{ y: item.y }}
              className={`aspect-[3/4.5] rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-1000 view-target ${i > 1 ? 'hidden lg:block' : ''} ${i % 2 !== 0 ? 'mt-24' : ''}`}
            >
              <img 
                src={item.img} 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-[1.5s] scale-105 hover:scale-110" 
                alt="Brand aesthetic" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
