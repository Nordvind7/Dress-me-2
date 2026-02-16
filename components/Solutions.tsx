
import React, { useRef, useEffect, useState } from 'react';
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
  
  // Адаптивное смещение для горизонтальной прокрутки
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const springX = useSpring(x, { stiffness: 50, damping: 20 });

  return (
    <section ref={targetRef} id="solutions" className="relative h-[500vh] bg-[#FDFCFB]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Индикатор прогресса секции */}
        <div className="absolute top-24 left-10 lg:left-24 z-20 flex items-center gap-4">
          <span className="text-[10px] font-black tracking-widest text-[#A39382]">01</span>
          <div className="w-32 h-[1px] bg-black/10 relative overflow-hidden">
            <motion.div 
              style={{ scaleX: scrollYProgress }} 
              className="absolute inset-0 bg-[#A39382] origin-left" 
            />
          </div>
          <span className="text-[10px] font-black tracking-widest text-black/20">05</span>
        </div>

        <motion.div style={{ x: springX }} className="flex gap-20 lg:gap-40 px-10 lg:px-24">
          <div className="min-w-[60vw] lg:min-w-[45vw] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-black text-7xl md:text-[11rem] font-black uppercase leading-[0.8] tracking-tighter">
                Система <br /> 
                <span className="serif italic font-light text-[#A39382] pl-[4vw] lowercase tracking-normal">знаний</span>
              </h2>
              <div className="mt-16 max-w-sm">
                <p className="text-black/50 font-light text-lg leading-relaxed mb-12">
                  Мы превратили искусство стиля в пошаговую систему. Пять фундаментальных файлов, которые заменят вам десятки курсов.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover grayscale" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 italic">
                    Уже изучили 2.4k+ женщин
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {checklists.map((card, i) => (
            <motion.div 
              key={i} 
              className="min-w-[85vw] lg:min-w-[38vw] relative group"
            >
              <div className="aspect-[3/4.2] overflow-hidden rounded-[3rem] shadow-sm group-hover:shadow-3xl transition-all duration-1000 relative">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                
                <div className="absolute top-12 left-12">
                   <div className="px-4 py-2 border border-white/20 rounded-full backdrop-blur-md">
                      <span className="text-[9px] uppercase font-black tracking-[0.3em] text-white">{card.label}</span>
                   </div>
                </div>

                <div className="absolute bottom-16 left-12 right-12 text-white z-10">
                  <span className="text-[13px] uppercase font-black tracking-[0.6em] text-[#A39382] block mb-4">
                    FILE {card.num}
                  </span>
                  <h3 className="text-5xl lg:text-6xl font-black leading-none uppercase tracking-tighter mb-6">
                    {card.title} <br /> <span className="serif italic font-light lowercase tracking-normal text-white/80">{card.sub}</span>
                  </h3>
                  <div className="h-[2px] w-0 bg-white/40 group-hover:w-full transition-all duration-1000" />
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="min-w-[50vw] flex flex-col justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative p-4"
            >
              <div className="absolute inset-0 border border-[#A39382]/20 rounded-full animate-spin-slow pointer-events-none" />
              <div className="absolute inset-2 border border-[#A39382]/10 rounded-full animate-spin-slow pointer-events-none [animation-direction:reverse]" />
              <a 
                href="https://t.me/dress_me_shop_bot"
                className="w-64 h-64 rounded-full bg-black flex flex-col items-center justify-center text-white text-center transition-colors hover:bg-[#A39382] group"
              >
                <span className="text-[10px] uppercase font-black tracking-[0.4em] mb-2">Забрать</span>
                <span className="serif italic text-2xl lowercase font-light">бесплатно</span>
                <div className="mt-4 w-12 h-[1px] bg-white/30 group-hover:w-20 transition-all" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
