
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const checklists = [
  { num: "01", title: "Аудит", sub: "Гардероба", label: "STRUCTURE", img: "https://i.postimg.cc/ZK0hgRYY/2026_02_16_09_22_08.jpg" },
  { num: "02", title: "Деловой", sub: "Этикет", label: "STATUS", img: "https://i.postimg.cc/fTkhFLWs/2026_02_16_09_22_19.jpg" },
  { num: "03", title: "Мини", sub: "Капсула", label: "EFFORTLESS", img: "https://i.postimg.cc/RVqz8FC6/2026_02_16_09_23_03.jpg" },
  { num: "04", title: "Умный", sub: "Шопинг", label: "STRATEGY", img: "https://i.postimg.cc/NfLwVMGj/2026_02_16_09_21_44.jpg" },
  { num: "05", title: "Первый", sub: "Оффер", label: "IMPRESSION", img: "https://i.postimg.cc/wT3dPvx6/2026_02_16_09_21_58.jpg" },
];

const Solutions: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  // Расчет смещения: 0% до -72% (оптимально для 5 широких карточек)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);
  const springX = useSpring(x, { stiffness: 40, damping: 20, mass: 0.5 });

  return (
    <section ref={targetRef} id="solutions" className="relative h-[600vh] bg-[#FDFCFB]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Progress Bar Top */}
        <div className="absolute top-24 left-10 lg:left-24 z-20 flex items-center gap-6">
          <span className="text-[10px] font-black tracking-[0.3em] text-[#A39382]">CATALOGUE</span>
          <div className="w-40 h-[1px] bg-black/5 relative">
            <motion.div 
              style={{ scaleX: scrollYProgress }} 
              className="absolute inset-0 bg-[#A39382] origin-left" 
            />
          </div>
          <motion.span className="text-[10px] font-bold text-black/20">
            {Math.round(checklists.length)} FILES
          </motion.span>
        </div>

        <motion.div style={{ x: springX }} className="flex gap-20 lg:gap-32 px-10 lg:px-24 items-center">
          {/* Intro Card */}
          <div className="min-w-[70vw] lg:min-w-[40vw] flex flex-col justify-center pr-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-black text-6xl md:text-[9rem] font-black uppercase leading-[0.8] tracking-tighter">
                Система <br /> 
                <span className="serif italic font-light text-[#A39382] pl-[4vw] lowercase tracking-normal">знаний</span>
              </h2>
              <div className="mt-12 max-w-sm">
                <p className="text-black/40 font-light text-lg leading-relaxed mb-8">
                  Пять секретных файлов, которые превратят ваш шкаф в идеальную капсулу для жизни и успеха.
                </p>
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A39382] animate-pulse" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-black/30">Scroll to begin exploration</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Checklist Cards */}
          {checklists.map((card, i) => (
            <motion.div 
              key={i} 
              className="min-w-[85vw] lg:min-w-[32vw] relative group backface-hidden"
            >
              <div className="aspect-[3/4.2] overflow-hidden rounded-[2.5rem] shadow-sm group-hover:shadow-3xl transition-all duration-1000">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
              </div>
              
              <div className="absolute top-10 left-10">
                   <div className="px-4 py-1.5 border border-white/20 rounded-full backdrop-blur-xl">
                      <span className="text-[8px] uppercase font-black tracking-[0.4em] text-white">{card.label}</span>
                   </div>
              </div>

              <div className="absolute bottom-12 left-12 right-12 text-white z-10">
                <span className="text-[11px] uppercase font-bold tracking-[0.5em] text-[#A39382] block mb-3">
                  0{i+1} / 05
                </span>
                <h3 className="text-4xl lg:text-5xl font-black leading-none uppercase tracking-tighter mb-4">
                  {card.title} <br /> <span className="serif italic font-light lowercase tracking-normal text-white/60">{card.sub}</span>
                </h3>
              </div>
            </motion.div>
          ))}
          
          {/* Outro / CTA Card */}
          <div className="min-w-[50vw] flex flex-col justify-center items-center px-20">
            <motion.div whileHover={{ scale: 1.05 }} className="relative p-8">
              <div className="absolute inset-0 border border-[#A39382]/20 rounded-full animate-spin-slow" />
              <a 
                href="https://t.me/dress_me_shop_bot"
                className="w-56 h-56 rounded-full bg-black flex flex-col items-center justify-center text-white text-center hover:bg-[#A39382] transition-all duration-500 shadow-2xl"
              >
                <span className="text-[9px] uppercase font-black tracking-[0.4em] mb-2">Получить</span>
                <span className="serif italic text-2xl font-light">доступ</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
