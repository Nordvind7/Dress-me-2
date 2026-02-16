
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-[#FDFCFB] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2 }}
              className="aspect-[4/6] rounded-[60px] overflow-hidden shadow-3xl z-10 relative"
            >
              <img src="https://i.postimg.cc/RVqz8FC6/2026_02_16_09_23_03.jpg" className="w-full h-full object-cover scale-110" alt="Brand Aesthetics" />
            </motion.div>
            
            {/* Float Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -right-10 -bottom-10 bg-black text-white p-12 rounded-full hidden md:block z-20"
            >
              <div className="text-4xl font-black mb-1">10+</div>
              <div className="text-[8px] uppercase tracking-widest text-white/40">Лет Опыта</div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <div className="flex items-center gap-6">
                <span className="h-px w-12 bg-[#A39382]" />
                <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#A39382]">Our Heritage</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
                Dress Me <br />
                <span className="serif italic font-light text-gray-300 pl-[4vw]">Art of Style</span>
              </h2>

              <p className="text-lg text-gray-500 font-light leading-relaxed max-w-xl">
                Мы — не просто бренд. Мы создаем новую культуру отношения к себе через одежду. Наше производство в Сибири — это сплав технологий и ручного мастерства.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t border-gray-100">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Миссия</h4>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    Трансформировать хаос в гармонию, даря женщинам уверенность в каждом дне.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Качество</h4>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    Контроль каждого стежка и эксклюзивные лекала, отточенные годами практики.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
