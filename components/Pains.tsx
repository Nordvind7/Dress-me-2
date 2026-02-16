
import React from 'react';
import { motion } from 'framer-motion';

const pains = [
  { 
    id: "01", 
    label: "Стресс", 
    text: "Каждое утро начинается с битвы перед зеркалом, отнимая энергию для важных дел.",
    icon: "✧"
  },
  { 
    id: "02", 
    label: "Траты", 
    text: "Вещи куплены импульсивно, бюджет потрачен, а целостного образа так и не появилось.",
    icon: "✦"
  },
  { 
    id: "03", 
    label: "Хаос", 
    text: "Шкаф переполнен, но 80% вещей просто висят с бирками годами, не принося радости.",
    icon: "✧"
  },
  { 
    id: "04", 
    label: "Упущенное", 
    text: "Ваш внешний вид не отражает ваш потенциал, создавая неверное первое впечатление.",
    icon: "✦"
  },
];

const Pains: React.FC = () => {
  return (
    <section id="pains" className="bg-[#0D0D0D] section-padding relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center lg:justify-start gap-4 mb-6"
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-white/30">The Struggle</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white text-6xl md:text-9xl font-black tracking-tighter leading-tight uppercase"
          >
            Почему это <br />
            <span className="serif italic font-light text-[#A39382]">сложно?</span>
          </h2 >
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-px lg:bg-white/10">
          {pains.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-[#0D0D0D] p-10 lg:p-12 transition-all duration-700 hover:bg-white/5 overflow-hidden"
            >
              <div className="absolute top-8 right-8 text-white/10 text-4xl group-hover:text-[#A39382]/40 transition-colors">
                {p.icon}
              </div>
              <span className="text-[10px] font-black tracking-widest text-white/20 mb-12 block group-hover:text-white transition-colors">
                STEP {p.id}
              </span>
              <h3 className="text-white text-3xl font-bold uppercase tracking-tight mb-6 transition-transform group-hover:translate-x-2">
                {p.label}
              </h3>
              <p className="text-white/40 font-light leading-relaxed text-sm group-hover:text-white/70 transition-colors">
                {p.text}
              </p>
              
              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#A39382] transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pains;
