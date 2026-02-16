
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[4/5.5] rounded-[80px] overflow-hidden shadow-2xl relative z-10"
            >
              <img src="https://i.postimg.cc/RVqz8FC6/2026_02_16_09_23_03.jpg" className="w-full h-full object-cover scale-105" alt="Brand story" />
            </motion.div>
            
            {/* Декоративная подложка */}
            <div className="absolute -top-10 -left-10 w-full h-full border border-gray-100 rounded-[80px] -z-0" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-12 bottom-12 bg-black text-white p-14 rounded-full hidden xl:block z-20 shadow-2xl"
            >
              <div className="text-5xl font-black mb-2 leading-none tracking-tighter">10+</div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-white/50 leading-tight">Лет опыта в <br/> индустрии</div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-16"
            >
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <span className="h-[2px] w-12 bg-[#A39382]" />
                  <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#A39382]">Our DNA</span>
                </div>
                
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
                  Больше чем <br />
                  <span className="serif italic font-light text-gray-300 ml-12 lowercase tracking-normal">одежда</span>
                </h2>
              </div>

              <p className="text-xl text-gray-500 font-light leading-relaxed max-w-xl serif italic">
                "Мы верим, что одежда — это мощный инструмент невербальной коммуникации. Мы создаем систему, которая помогает вам говорить на языке успеха."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 border-t border-gray-100">
                <div className="space-y-6">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-black">Производство</h4>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    Собственный цех в Сибири позволяет нам контролировать каждый миллиметр шва.
                  </p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-black">Миссия</h4>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    Показать, что идеальный гардероб возможен без лишних трат и стресса.
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
