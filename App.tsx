
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { Download, Star, ArrowRight, Menu, X } from 'lucide-react';

// --- COMPONENTS CONSOLIDATED FOR DEPLOYMENT STABILITY ---

const Navbar = () => (
  <motion.nav 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="fixed top-0 left-0 right-0 z-[100] px-6 py-8"
  >
    <div className="max-w-[1400px] mx-auto flex justify-between items-center bg-white/70 backdrop-blur-3xl px-10 py-5 rounded-full border border-black/5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-[#A39382] rounded-full" />
        <span className="text-lg font-black tracking-tighter uppercase font-serif">Dress Me</span>
      </div>
      <div className="hidden md:flex items-center gap-12">
        {['Проблемы', 'Система', 'О бренде'].map((item, i) => (
          <a key={item} href={`#${['pains', 'solutions', 'about'][i]}`} className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/40 hover:text-black transition-all">
            {item}
          </a>
        ))}
      </div>
      <a href="https://t.me/dress_me_shop_bot" className="bg-black text-white px-8 py-4 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-[#A39382] transition-colors">
        В Telegram
      </a>
    </div>
  </motion.nav>
);

const CustomCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const cursorX = useSpring(mouseX, { damping: 40, stiffness: 400 });
  const cursorY = useSpring(mouseY, { damping: 40, stiffness: 400 });
  const [type, setType] = useState('default');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    window.addEventListener('mousemove', (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    });
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full mix-blend-difference bg-white"
      style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: 12, height: 12 }}
    />
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useSpring(useTransform(scrollY, [0, 1000], [0, 150]));
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-48 pb-24">
      <motion.div style={{ opacity }} className="max-w-[1800px] mx-auto w-full px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-9">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <h1 className="text-[14vw] lg:text-[11vw] font-black leading-[0.75] tracking-tighter uppercase mb-24">
                Ваша <br />
                <span className="serif italic font-light text-[#A39382] lowercase ml-[5vw]">новая</span> <br />
                версия
              </h1>
            </motion.div>
          </div>
          <div className="lg:col-span-3 pt-32">
            <p className="text-gray-400 font-light border-l border-[#A39382] pl-8 mb-12">
              Мы превратили хаос гардероба в чистую стратегию вашего успеха.
            </p>
            <a href="https://t.me/dress_me_shop_bot" className="block bg-black text-white text-center py-7 rounded-full text-[10px] uppercase font-bold tracking-widest hover:bg-[#A39382] transition-all">
              Начать разбор
            </a>
          </div>
        </div>
        <div className="mt-40 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            "https://i.postimg.cc/NfLwVMGj/2026_02_16_09_21_44.jpg",
            "https://i.postimg.cc/wT3dPvx6/2026_02_16_09_21_58.jpg",
            "https://i.postimg.cc/ZK0hgRYY/2026_02_16_09_22_08.jpg",
            "https://i.postimg.cc/fTkhFLWs/2026_02_16_09_22_19.jpg"
          ].map((img, i) => (
            <motion.div key={i} style={{ y: i % 2 === 0 ? y1 : 0 }} className="aspect-[3/4.5] rounded-[2rem] overflow-hidden">
              <img src={img} className="w-full h-full object-cover grayscale-[0.2]" alt="" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Solutions = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  
  return (
    <section ref={targetRef} id="solutions" className="relative h-[400vh] bg-[#FDFCFB]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-24 px-24">
          <div className="min-w-[45vw]">
            <h2 className="text-[10rem] font-black uppercase leading-[0.8] tracking-tighter">
              Система <br /> <span className="serif italic font-light text-[#A39382] lowercase">знаний</span>
            </h2>
          </div>
          {[1,2,3,4,5].map(i => (
            <div key={i} className="min-w-[35vw] aspect-[3/4] bg-gray-100 rounded-[3rem] overflow-hidden relative">
               <img src={`https://i.postimg.cc/ZK0hgRYY/2026_02_16_09_22_08.jpg`} className="w-full h-full object-cover" alt="" />
               <div className="absolute inset-0 bg-black/40 flex items-end p-12">
                  <h3 className="text-white text-5xl font-black uppercase">Файл 0{i}</h3>
               </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-40 bg-black text-white text-center">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-8xl font-black mb-12 uppercase tracking-tighter">Пора <br/><span className="serif italic font-light text-white/30 lowercase">меняться</span></h2>
      <a href="https://t.me/dress_me_shop_bot" className="inline-block bg-white text-black px-16 py-8 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#A39382] hover:text-white transition-all">
        Забрать 5 чек-листов
      </a>
    </div>
  </section>
);

// --- MAIN APP ---

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative">
      <CustomCursor />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#A39382] z-[101] origin-left" style={{ scaleX }} />
      <Navbar />
      <main>
        <Hero />
        <section id="pains" className="py-32 bg-[#0D0D0D] text-white px-12">
           <h2 className="text-7xl font-black uppercase mb-20 tracking-tighter">Почему <br/><span className="serif italic font-light text-[#A39382]">сложно?</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {["Стресс", "Траты", "Хаос"].map((p, i) => (
                <div key={i} className="border-t border-white/10 pt-8">
                  <span className="text-[#A39382] font-bold mb-4 block">0{i+1}</span>
                  <h3 className="text-3xl font-black uppercase mb-4">{p}</h3>
                  <p className="text-white/40 font-light">Каждое утро начинается с битвы перед зеркалом, отнимая энергию.</p>
                </div>
              ))}
           </div>
        </section>
        <Solutions />
        <CTA />
      </main>
      <footer className="py-20 bg-[#FAF9F6] text-center border-t border-black/5">
        <p className="text-[10px] uppercase font-bold tracking-widest text-black/20">© 2024 Dress Me. Digital Style System.</p>
      </footer>
    </div>
  );
};

export default App;
