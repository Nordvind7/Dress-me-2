
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const checklists = [
  { num: "01", title: "Аудит", sub: "Гардероба", label: "STRUCTURE", img: "https://i.postimg.cc/ZK0hgRYY/2026_02_16_09_22_08.jpg" },
  { num: "02", title: "Деловой", sub: "Этикет", label: "STATUS", img: "https://i.postimg.cc/fTkhFLWs/2026_02_16_09_22_19.jpg" },
  { num: "03", title: "Мини", sub: "Капсула", label: "EFFORTLESS", img: "https://i.postimg.cc/RVqz8FC6/2026_02_16_09_23_03.jpg" },
  { num: "04", title: "Умный", sub: "Шопинг", label: "STRATEGY", img: "https://i.postimg.cc/NfLwVMGj/2026_02_16_09_21_44.jpg" },
  { num: "05", title: "Первый", sub: "Оффер", label: "IMPRESSION", img: "https://i.postimg.cc/wT3dPvx6/2026_02_16_09_21_58.jpg" },
];

const Solutions: React.FC = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="solutions" className="relative h-[400vh] bg-[#FDFCFB]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <div className="absolute top-10 left-10 lg:left-20 flex items-center gap-6">
          <div className="h-[1px] w-20 bg-black/10" />
          <span className="text-[10px] uppercase font-black tracking-[0.5em] text-black/20">The Catalog</span>
        </div>

        <motion.div style={{ x }} className="flex gap-16 lg:gap-32 px-10 lg:px-24">
          <div className="min-w-[50vw] flex flex-col justify-center">
            <h2 className="text-black text-7xl md:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter">
              Система <br /> 
              <span className="serif italic font-light text-[#A39382] pl-[5vw]">знаний</span>
            </h2>
            <div className="mt-12 max-w-sm">
              <p className="text-black/40 font-light text-lg leading-relaxed mb-10">
                Мы упаковали десятилетний опыт в 5 фундаментальных чек-листов. Это ваша дорожная карта к безупречности.
              </p>
              <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase">
                <span>Scroll to explore</span>
                <motion.div 
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-10 h-px bg-black"
                />
              </div>
            </div>
          </div>

          {checklists.map((card, i) => (
            <motion.div 
              key={i} 
              className="min-w-[85vw] lg:min-w-[35vw] relative group"
            >
              <div className="aspect-[3/4.5] overflow-hidden rounded-[40px] shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              
              <div className="absolute top-10 left-10 text-white/50 text-[10px] font-black tracking-[0.4em]">
                {card.label}
              </div>

              <div className="absolute bottom-12 left-12 text-white z-10">
                <span className="text-[12px] uppercase font-bold tracking-[0.5em] text-[#A39382] block mb-4">
                  FILE {card.num}
                </span>
                <h3 className="text-5xl font-black leading-none uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-700">
                  {card.title} <br /> {card.sub}
                </h3>
              </div>
            </motion.div>
          ))}
          
          <div className="min-w-[40vw] flex flex-col justify-center items-center text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative p-2"
            >
              <div className="absolute inset-0 border border-black/5 rounded-full animate-spin-slow pointer-events-none" />
              <a 
                href="https://t.me/dress_me_shop_bot"
                className="w-56 h-56 rounded-full bg-black flex items-center justify-center text-white text-[10px] uppercase font-bold tracking-[0.4em] leading-relaxed px-10 hover:bg-[#A39382] transition-colors"
              >
                Получить все бесплатно
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
