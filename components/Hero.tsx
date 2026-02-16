
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 200]);
  const y2 = useTransform(scrollY, [0, 800], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-40 pb-20">
      <div className="max-w-[1800px] mx-auto w-full px-6">
        
        {/* Decorative elements */}
        <motion.div 
          style={{ opacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#A39382]/5 rounded-full blur-[120px] pointer-events-none z-0"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-12 bg-black/20" />
                <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-black/40">
                  Exclusive Style Experience
                </span>
              </div>
              <h1 className="text-[14vw] lg:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase mb-16">
                Ваш <br />
                <span className="serif italic font-light lowercase text-[#A39382] pl-[8vw]">идеальный</span> <br />
                гардероб
              </h1>
            </motion.div>
          </div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="space-y-10"
            >
              <p className="text-sm font-light leading-relaxed text-gray-500 max-w-xs">
                Забудьте о бесконечных поисках. Мы создали систему, в которой каждая вещь работает на ваш образ и успех.
              </p>
              
              <div className="flex flex-col gap-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://t.me/dress_me_shop_bot"
                  className="bg-black text-white px-10 py-6 rounded-full text-[10px] uppercase font-bold tracking-[0.3em] text-center transition-shadow hover:shadow-2xl"
                >
                  Начать трансформацию
                </motion.a>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-black/10 rounded-full" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Parallax Image Grid */}
        <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { img: "https://i.postimg.cc/NfLwVMGj/2026_02_16_09_21_44.jpg", y: y1 },
            { img: "https://i.postimg.cc/wT3dPvx6/2026_02_16_09_21_58.jpg", y: y2 },
            { img: "https://i.postimg.cc/ZK0hgRYY/2026_02_16_09_22_08.jpg", y: y1 },
            { img: "https://i.postimg.cc/fTkhFLWs/2026_02_16_09_22_19.jpg", y: y2 },
          ].map((item, i) => (
            <motion.div 
              key={i}
              style={{ y: item.y }}
              className={`aspect-[3/4] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-700 view-target ${i > 1 ? 'hidden lg:block' : ''} ${i === 1 ? 'lg:mt-24' : ''} ${i === 3 ? 'lg:mt-24' : ''}`}
            >
              <img 
                src={item.img} 
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-110" 
                alt="Brand visual" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
