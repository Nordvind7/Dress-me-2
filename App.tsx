
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronRight, ArrowRight, Instagram, Send, Globe, Star, Sparkles } from 'lucide-react';

// --- CONFIG ---
const TG_LINK = "https://t.me/dress_me_shop_bot";

const IMAGES = {
  hero: "https://i.postimg.cc/NfLwVMGj/2026_02_16_09_21_44.jpg",
  pains: "https://i.postimg.cc/wT3dPvx6/2026_02_16_09_21_58.jpg",
  audit: "https://i.postimg.cc/ZK0hgRYY/2026_02_16_09_22_08.jpg",
  etiquette: "https://i.postimg.cc/fTkhFLWs/2026_02_16_09_22_19.jpg",
  formula: "https://i.postimg.cc/RVqz8FC6/2026_02_16_09_23_03.jpg",
};

const STEPS = [
  { id: "01", title: "АУДИТ ГАРДЕРОБА", desc: "Узнайте, что выбросить прямо сейчас, чтобы освободить место для новой жизни.", img: IMAGES.audit },
  { id: "02", title: "ДЕЛОВОЙ ЭТИКЕТ", desc: "5 фатальных ошибок в офисе, которые мешают вам зарабатывать больше.", img: IMAGES.etiquette },
  { id: "03", title: "ФОРМУЛА 5=15", desc: "Как собрать чемодан в отпуск или капсулу на работу, имея всего 5 вещей.", img: IMAGES.formula },
  { id: "04", title: "ШОПИНГ-СТРАТЕГИЯ", desc: "Как сходить в магазин 1 раз в год и закрыть все вопросы со стилем.", img: IMAGES.hero },
  { id: "05", title: "МАСТЕРСТВО СОБЕСЕДОВАНИЯ", desc: "Образы, которые заставляют работодателя влюбиться в ваше резюме.", img: IMAGES.pains },
];

// --- UI HELPERS ---

const TextReveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <div ref={ref} className="overflow-hidden relative">
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.8, delay, ease: [0.33, 1, 0.68, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const FadeIn = ({ children, delay = 0, x = 0, y = 30 }: { children: React.ReactNode, delay?: number, x?: number, y?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration: 1, delay, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {children}
    </motion.div>
  );
};

// --- COMPONENTS ---

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 bg-[#A39382] rounded-full pointer-events-none z-[9999] mix-blend-difference"
      animate={{ x: mousePos.x - 10, y: mousePos.y - 10 }}
      transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.5 }}
    />
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 md:px-10 ${scrolled ? 'py-4' : 'py-8'}`}
    >
      <div className={`max-w-[1600px] mx-auto flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border border-black/5 shadow-sm px-6 py-2.5 rounded-2xl' : ''}`}>
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-2 h-2 bg-[#A39382] rounded-full group-hover:scale-150 transition-transform" />
          <span className="text-sm font-black tracking-tighter uppercase font-serif">Dress Me</span>
        </div>
        <a href={TG_LINK} className="relative overflow-hidden group bg-black text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all hover:bg-[#A39382] active:scale-95">
          <span className="relative z-10">Получить чек-листы</span>
        </a>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 800], [0, -150]);
  const yImage = useTransform(scrollY, [0, 800], [0, 150]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#FAF9F6]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full lg:w-[45vw] h-full bg-white/50 border-l border-black/5 z-0" />
      <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-[#A39382]/5 blur-[100px] rounded-full z-0" />

      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-10 grid lg:grid-cols-12 gap-10 items-center relative z-10">
        <motion.div style={{ y: yText, opacity }} className="lg:col-span-8 pt-20">
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-4 mb-8">
               <span className="text-[10px] uppercase tracking-[0.6em] text-[#A39382] font-black">Digital Style Transformation</span>
               <div className="h-px w-12 bg-[#A39382]/30" />
            </div>
          </FadeIn>
          
          <div className="mb-10">
            <TextReveal delay={0.2}>
              <h1 className="text-[clamp(2.5rem,11vw,8.5rem)] font-black leading-[0.82] tracking-tighter uppercase text-black">
                Ваш гардероб
              </h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <h1 className="text-[clamp(2.5rem,11vw,8.5rem)] font-black leading-[0.82] tracking-tighter uppercase text-black">
                <span className="serif italic font-light text-[#A39382] lowercase tracking-normal -ml-1">больше не будет</span>
              </h1>
            </TextReveal>
            <TextReveal delay={0.4}>
              <h1 className="text-[clamp(2.5rem,11vw,8.5rem)] font-black leading-[0.82] tracking-tighter uppercase text-black">
                прежним.
              </h1>
            </TextReveal>
          </div>

          <FadeIn delay={0.6}>
            <p className="text-black/50 text-base md:text-xl font-light leading-relaxed max-w-2xl mb-14 pl-10 border-l-2 border-[#A39382]/30">
              Заберите систему из 5 чек-листов от топ-стилистов Dress Me. Мы научим вас одеваться дорого, тратить мало и забыть о фразе «мне нечего надеть» навсегда.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <motion.a 
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              href={TG_LINK}
              className="inline-flex items-center gap-6 bg-black text-white px-12 py-8 rounded-full text-[11px] font-black uppercase tracking-[0.2em] group shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10">ПОЛУЧИТЬ 5 ИНСТРУКЦИЙ БЕСПЛАТНО</span>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#A39382] transition-colors relative z-10">
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
            </motion.a>
          </FadeIn>
        </motion.div>
        
        <motion.div 
          style={{ y: yImage, opacity }}
          className="lg:col-span-4 hidden lg:block"
        >
          <FadeIn delay={0.4} x={50}>
            <div className="aspect-[3/4.5] rounded-[4.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[15px] border-white relative group">
              <img src={IMAGES.hero} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[2s]" alt="Hero look" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </FadeIn>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-10 hidden lg:flex items-center gap-4 opacity-20 group cursor-default">
         <span className="text-[10px] font-bold tracking-[0.5em] uppercase">Scroll to explore</span>
         <div className="w-20 h-px bg-black origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-700" />
      </div>
    </section>
  );
};

const Pains = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  const items = [
    { t: "Шкаф забит, а образа нет", d: "Вещи живут отдельно друг от друга. Полный рассинхрон в стиле." },
    { t: "Вещи «из прошлого»", d: "Вы изменились, а ваш гардероб застрял в 2015-м. Время обновления." },
    { t: "Импульсивный шопинг", d: "Вы покупаете «красивое платье», которое потом годами висит с биркой." },
    { t: "Страх ошибки", d: "Вы боитесь ярких цветов и сложных кроев, поэтому выбираете серое." }
  ];

  return (
    <section id="section-0" ref={ref} className="py-32 md:py-48 bg-[#111] text-white px-6 md:px-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#A39382]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="mb-24 lg:mb-32 max-w-4xl">
          <FadeIn>
            <span className="text-[10px] font-bold tracking-[0.6em] text-[#A39382] mb-8 block uppercase">Analysis of Reality</span>
            <h2 className="text-[clamp(2rem,7vw,5.5rem)] font-black uppercase leading-[0.9] tracking-tighter">
              ПОЧЕМУ 90% ЖЕНЩИН <br />
              <span className="serif italic font-light text-[#A39382] lowercase tracking-normal">недовольны</span> своим видом?
            </h2>
            <p className="mt-10 text-white/30 text-lg md:text-2xl font-light leading-relaxed max-w-2xl border-l border-white/10 pl-8">
              Дело не в отсутствии денег или фигуры. Проблема в другом:
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 lg:gap-y-24">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group flex gap-8 items-start border-l border-white/5 pl-8 hover:border-[#A39382] transition-all duration-500"
            >
              <div className="mt-1 text-[#A39382] opacity-30 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-700">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-[#A39382] transition-colors">{item.t}</h3>
                <p className="text-white/40 font-light leading-relaxed text-sm md:text-base">{item.d}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-32 pt-16 border-t border-white/5 flex flex-col items-center text-center">
            <p className="text-[#A39382] text-xl md:text-4xl font-serif italic max-w-4xl leading-snug">
              МЫ СОЗДАЛИ РЕШЕНИЕ ДЛЯ ТЕХ, <br className="hidden md:block"/> КТО ЦЕНИТ СВОЕ ВРЕМЯ.
            </p>
            <div className="mt-12 w-px h-24 bg-gradient-to-b from-[#A39382] to-transparent hidden md:block" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const Solutions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-75%"]);
  const springX = useSpring(x, { stiffness: 45, damping: 20, mass: 0.5 });

  return (
    <section ref={containerRef} id="section-1" className="relative h-[600vh] bg-[#FAF9F6]">
      <div className="sticky top-0 h-[100svh] flex items-center overflow-hidden">
        <motion.div style={{ x: springX }} className="flex gap-16 md:gap-32 px-10 md:px-24 items-center">
          
          <div className="min-w-[85vw] lg:min-w-[45vw]">
            <span className="text-[10px] font-bold tracking-[0.6em] text-[#A39382] mb-6 block uppercase">Base of Knowledge</span>
            <h2 className="text-[clamp(2.5rem,8.5vw,7rem)] font-black uppercase leading-[0.85] tracking-tighter text-black">
              5 ШАГОВ К <br />
              <span className="serif italic font-light text-[#A39382] lowercase tracking-normal ml-8">идеальному</span> <br />
              гардеробу
            </h2>
            <div className="mt-12 flex items-center gap-6 text-[#A39382]">
              <div className="w-16 h-px bg-[#A39382]" />
              <span className="text-[10px] font-black tracking-[0.5em] animate-pulse">ЛИСТАЙТЕ ВПРАВО →</span>
            </div>
          </div>

          {STEPS.map((step, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="min-w-[85vw] md:min-w-[38vw] aspect-[3/4.2] relative group rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]"
            >
              <img src={step.img} className="w-full h-full object-cover transition-all duration-[4s] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" alt={step.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
              <div className="absolute top-10 left-10">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2.5 rounded-full">
                  <span className="text-[9px] font-black tracking-[0.4em] text-white uppercase">PDF-ДОСТУП 2024</span>
                </div>
              </div>
              <div className="absolute bottom-12 left-10 right-10">
                <span className="text-[11px] font-black text-[#A39382] mb-4 block tracking-[0.3em] uppercase">ШАГ 0{i+1} / 05</span>
                <h3 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-5 group-hover:translate-x-2 transition-transform">
                  {step.title}
                </h3>
                <p className="text-white/50 text-xs md:text-base font-light leading-relaxed max-w-[350px]">{step.desc}</p>
              </div>
            </motion.div>
          ))}

          <div className="min-w-[60vw] flex flex-col items-center justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={TG_LINK}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-black flex flex-col items-center justify-center text-center group hover:bg-[#A39382] transition-all duration-700 shadow-3xl"
            >
              <span className="text-white text-xl md:text-3xl font-serif italic mb-4">Получить все</span>
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform bg-white/5">
                <ArrowUpRight className="text-white" size={32} />
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="section-2" className="py-32 md:py-48 bg-white px-6 md:px-10 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <FadeIn x={-50} y={0}>
              <div className="aspect-[4/5] rounded-[5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] relative z-10 border-[10px] border-[#FAF9F6]">
                <img src={IMAGES.formula} className="w-full h-full object-cover" alt="Production" />
              </div>
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-10 -right-5 md:-right-10 bg-black text-white p-12 md:p-16 rounded-full z-20 shadow-3xl hidden sm:flex flex-col items-center justify-center"
              >
                <span className="text-5xl md:text-7xl font-black block mb-1 tracking-tighter">164+</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 block font-bold">Рост 164-170 см</span>
              </motion.div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2">
            <FadeIn delay={0.2} y={30}>
              <span className="text-[10px] font-bold tracking-[0.5em] text-[#A39382] mb-8 block uppercase">Brand DNA</span>
              <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[0.9] tracking-tighter mb-14">
                DRESS ME — ЭТО <br />
                <span className="serif italic font-light text-[#A39382] lowercase tracking-normal">больше</span>, чем магазин
              </h2>
            </FadeIn>
            
            <div className="space-y-12">
              {[
                { t: "Стилист + Капсула", d: "Мы создали систему, в которой каждая вещь работает на ваш образ, а не просто висит в шкафу." },
                { t: "Свой цех в Сибири", d: "Шьем в Новосибирске с учетом всех особенностей женских фигур (размеры 42-56)." },
                { t: "Бесплатный сервис", d: "Наши стилисты подбирают вам образы бесплатно — вы платите только за то, что подошло." },
                { t: "Теперь в Москве", d: "Мы открыли двери в столице, чтобы сделать премиальный шопинг доступным лично." }
              ].map((item, i) => (
                <FadeIn key={i} delay={0.4 + i * 0.1}>
                  <div className="flex gap-8 group">
                    <div className="w-1 h-auto bg-[#FAF9F6] group-hover:bg-[#A39382] transition-colors rounded-full" />
                    <div>
                      <h4 className="font-bold text-xl uppercase mb-3 group-hover:text-[#A39382] transition-all tracking-tight">{item.t}</h4>
                      <p className="text-black/40 text-sm md:text-base font-light leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-40 bg-black text-white px-6 text-center relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#A39382]/10 to-transparent pointer-events-none opacity-50" />
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      whileInView={{ opacity: 1, scale: 1 }}
      className="max-w-5xl mx-auto relative z-10"
    >
      <h2 className="text-[clamp(2.5rem,10vw,8.5rem)] font-black uppercase leading-[0.85] tracking-tighter mb-14">
        ГОТОВЫ К <br />
        <span className="serif italic font-light text-[#A39382] lowercase tracking-normal">переменам?</span>
      </h2>
      <p className="text-lg md:text-2xl text-white/40 mb-20 font-light max-w-3xl mx-auto leading-relaxed border-t border-white/5 pt-12">
        Жмите на кнопку, забирайте все материалы. Внутри вас ждет специальный бонус — возможность забронировать <span className="text-white font-bold underline decoration-[#A39382] decoration-2 underline-offset-8">бесплатную консультацию</span> со стилистом.
      </p>
      
      <motion.a 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={TG_LINK}
        className="inline-flex items-center gap-8 bg-white text-black px-16 py-9 rounded-full text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 shadow-3xl hover:bg-[#A39382] hover:text-white"
      >
        ЗАБРАТЬ ПОДБОРКУ И НАЧАТЬ ТРАНСФОРМАЦИЮ <ArrowRight size={24} />
      </motion.a>
      
      <div className="mt-40 flex flex-col md:flex-row justify-between items-center pt-20 border-t border-white/10 gap-10 opacity-30 hover:opacity-100 transition-opacity duration-1000">
        <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-[#A39382] rounded-full shadow-[0_0_15px_rgba(163,147,130,1)]" />
            <span className="text-xs uppercase tracking-[0.5em] font-serif font-black">Dress Me System</span>
        </div>
        <div className="flex gap-16">
          <motion.a whileHover={{ y: -5, color: "#A39382" }} href="#"><Instagram size={22} /></motion.a> 
          <motion.a whileHover={{ y: -5, color: "#A39382" }} href="#"><Send size={22} /></motion.a> 
          <motion.a whileHover={{ y: -5, color: "#A39382" }} href="#"><Globe size={22} /></motion.a>
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">© 2024 Novosibirsk / Moscow / Web</span>
      </div>
    </motion.div>
  </footer>
);

// --- MAIN WRAPPER ---

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#A39382] selection:text-white relative">
      <CustomCursor />
      <motion.div className="fixed top-0 left-0 right-0 h-2 bg-[#A39382] z-[1001] origin-left shadow-lg" style={{ scaleX }} />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Pains />
        <Solutions />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
