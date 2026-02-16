
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronRight, Send, Globe, Instagram, MessageCircle, ArrowRight } from 'lucide-react';

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
  { 
    id: "01", 
    title: "АУДИТ ГАРДЕРОБА", 
    desc: "Узнайте, что выбросить прямо сейчас, чтобы освободить место для новой жизни.", 
    img: IMAGES.audit 
  },
  { 
    id: "02", 
    title: "ДЕЛОВОЙ ЭТИКЕТ", 
    desc: "5 фатальных ошибок в офисе, которые мешают вам зарабатывать больше.", 
    img: IMAGES.etiquette 
  },
  { 
    id: "03", 
    title: "ФОРМУЛА 5=15", 
    desc: "Как собрать чемодан в отпуск или капсулу на работу, имея всего 5 вещей.", 
    img: IMAGES.formula 
  },
  { 
    id: "04", 
    title: "ШОПИНГ-СТРАТЕГИЯ", 
    desc: "Как сходить в магазин 1 раз в год и закрыть все вопросы со стилем.", 
    img: IMAGES.hero 
  },
  { 
    id: "05", 
    title: "МАСТЕРСТВО СОБЕСЕДОВАНИЯ", 
    desc: "Образы, которые заставляют работодателя влюбиться в ваше резюме.", 
    img: IMAGES.pains 
  },
];

// --- COMPONENTS ---

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    const moveMouse = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-black/10 border border-black/20 rounded-full pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 2 : 1,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
    >
      <div className="w-1 h-1 bg-white rounded-full" />
    </motion.div>
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
      <div className={`max-w-[1600px] mx-auto flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-2xl border border-black/5 shadow-xl px-6 py-3 rounded-2xl' : ''}`}>
        <div className="flex items-center gap-3 group cursor-pointer">
          <motion.div 
            animate={{ rotate: scrolled ? 180 : 0 }}
            className="w-2 h-2 bg-[#A39382] rounded-full" 
          />
          <span className="text-sm font-black tracking-tighter uppercase font-serif">Dress Me</span>
        </div>
        <div className="hidden md:flex gap-8">
            {['Проблемы', 'Решение', 'О нас'].map((item, i) => (
                <a key={item} href={`#section-${i}`} className="text-[9px] font-bold uppercase tracking-[0.4em] text-black/40 hover:text-black transition-colors">
                    {item}
                </a>
            ))}
        </div>
        <a href={TG_LINK} className="relative overflow-hidden group bg-black text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-transform hover:scale-105 active:scale-95">
          <span className="relative z-10">В КЛУБ</span>
          <motion.div className="absolute inset-0 bg-[#A39382] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
        </a>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-20 overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <motion.span style={{ opacity }} className="inline-block text-[10px] uppercase tracking-[0.8em] text-[#A39382] mb-8 font-black">
            Digital Style Transformation
          </motion.span>
          <h1 className="text-[clamp(2.5rem,11vw,9rem)] font-black leading-[0.85] tracking-tighter uppercase mb-12">
            Ваш гардероб <br />
            <span className="serif italic font-light text-[#A39382] lowercase tracking-normal -ml-2">больше не будет</span> <br />
            прежним.
          </h1>
          <p className="text-black/60 text-base md:text-xl font-light leading-relaxed max-w-2xl mb-14 border-l-2 border-[#A39382] pl-8">
            Заберите систему из 5 чек-листов от топ-стилистов Dress Me. Мы научим вас одеваться дорого, тратить мало и забыть о фразе «мне нечего надеть» навсегда.
          </p>
          <motion.a 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            href={TG_LINK}
            className="inline-flex items-center gap-6 bg-black text-white px-12 py-7 rounded-full text-[11px] font-black uppercase tracking-widest group shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
          >
            Получить 5 инструкций бесплатно 
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#A39382] transition-colors">
                <ArrowRight size={16} />
            </div>
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        style={{ y, opacity: useTransform(scrollY, [0, 600], [0.15, 0.4]) }} 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full lg:w-[45vw] lg:h-[80vh] pointer-events-none -z-0 lg:z-0 lg:block overflow-hidden"
      >
        <img src={IMAGES.hero} className="w-full h-full object-cover grayscale opacity-50 lg:opacity-100 lg:rounded-l-[100px]" alt="Fashion Background" />
      </motion.div>
    </section>
  );
};

const Pains = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  const points = [
    { t: "Шкаф забит, а образа нет", d: "Вещи живут отдельно друг от друга. Полный рассинхрон." },
    { t: "Вещи «из прошлого»", d: "Вы изменились, а ваш гардероб застрял в 2015-м." },
    { t: "Импульсивный шопинг", d: "Вы покупаете «красивое платье», которое потом не с чем носить." },
    { t: "Страх ошибки", d: "Вы боитесь ярких цветов и кроев, выбирая «безопасное серое»." }
  ];

  return (
    <section id="section-0" ref={ref} className="py-32 md:py-48 bg-[#121212] text-white px-6 md:px-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#A39382]/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="mb-24 lg:mb-32">
          <motion.span 
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            className="text-[10px] font-bold tracking-[0.6em] text-[#A39382] mb-8 block uppercase"
          >
            Reality Check
          </motion.span>
          <motion.h2 
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2rem,8vw,6rem)] font-black uppercase leading-[0.85] tracking-tighter"
          >
            Почему 90% женщин <br />
            <span className="serif italic font-light text-[#A39382] lowercase tracking-normal">недовольны</span> своим видом?
          </motion.h2>
          <motion.p 
            animate={isInView ? { opacity: 0.4 } : { opacity: 0 }}
            className="mt-10 text-white text-lg md:text-2xl font-light max-w-2xl"
          >
            Дело не в отсутствии денег или фигуры. Проблема в другом:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 lg:gap-y-24">
          {points.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex gap-8 items-start border-l border-white/5 pl-8 hover:border-[#A39382] transition-colors"
            >
              <span className="text-3xl font-serif italic text-[#A39382] opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-[#A39382] transition-colors">{item.t}</h3>
                <p className="text-white/40 font-light leading-relaxed text-sm md:text-base">{item.d}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 pt-16 border-t border-white/5 flex flex-col items-center text-center"
        >
          <p className="text-[#A39382] text-xl md:text-4xl font-serif italic mb-10 leading-tight">
            МЫ СОЗДАЛИ РЕШЕНИЕ ДЛЯ ТЕХ, <br /> КТО ЦЕНИТ СВОЕ ВРЕМЯ.
          </p>
          <div className="w-px h-24 bg-gradient-to-b from-[#A39382] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const springX = useSpring(x, { stiffness: 50, damping: 25, mass: 0.8 });

  return (
    <section id="section-1" ref={targetRef} className="relative h-[500vh] bg-[#FAF9F6]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x: springX }} className="flex gap-16 md:gap-32 px-10 md:px-24 items-center">
          
          <div className="min-w-[85vw] lg:min-w-[45vw]">
            <span className="text-[10px] font-bold tracking-[0.6em] text-[#A39382] mb-6 block uppercase">The Solution</span>
            <h2 className="text-[clamp(2.5rem,9vw,7rem)] font-black uppercase leading-[0.85] tracking-tighter text-black">
              5 ШАГОВ К <br />
              <span className="serif italic font-light text-[#A39382] lowercase tracking-normal ml-8">идеальному</span> <br />
              гардеробу
            </h2>
            <div className="mt-10 flex items-center gap-6 text-[#A39382]">
                <div className="w-16 h-px bg-[#A39382]" />
                <span className="text-[10px] uppercase font-black tracking-[0.4em] animate-pulse">Листайте вправо →</span>
            </div>
          </div>

          {STEPS.map((item, i) => (
            <motion.div 
              key={i} 
              className="min-w-[85vw] md:min-w-[35vw] aspect-[3/4.2] relative group rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]"
            >
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0" alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute top-10 left-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full">
                    <span className="text-[8px] font-bold tracking-[0.4em] text-white">PDF-ДОСТУП</span>
                </div>
              </div>
              <div className="absolute bottom-12 left-10 right-10">
                <span className="text-[10px] font-bold text-[#A39382] mb-3 block">ШАГ {item.id} / 05</span>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-tight mb-4 group-hover:translate-x-2 transition-transform">
                  {item.title}
                </h3>
                <p className="text-white/50 text-xs md:text-sm font-light leading-relaxed max-w-[280px]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
          
          <div className="min-w-[60vw] flex flex-col items-center justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href={TG_LINK}
              className="w-56 h-56 md:w-72 md:h-72 rounded-full border border-black/10 flex flex-col items-center justify-center text-center group hover:bg-black hover:border-black transition-all duration-700"
            >
              <span className="text-black group-hover:text-white text-xl md:text-3xl font-serif italic mb-4">Забрать всё</span>
              <div className="w-12 h-12 rounded-full bg-black/5 group-hover:bg-[#A39382] flex items-center justify-center transition-colors">
                <ArrowUpRight className="text-black group-hover:text-white" size={24} />
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="section-2" className="py-32 md:py-48 bg-white px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -60 }} 
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl"
            >
              <img src={IMAGES.formula} className="w-full h-full object-cover grayscale-[0.2]" alt="About Dress Me" />
            </motion.div>
            <div className="absolute -bottom-10 -right-5 md:-right-10 bg-[#1A1A1A] text-white p-10 md:p-14 rounded-full hidden sm:flex flex-col items-center shadow-3xl z-10">
              <span className="text-4xl md:text-6xl font-black block mb-1 tracking-tighter">164+</span>
              <span className="text-[9px] uppercase tracking-widest text-white/40 text-center font-bold">Уникальных <br/> лекал</span>
            </div>
          </div>

          <div ref={ref}>
            <motion.span 
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              className="text-[10px] font-bold tracking-[0.5em] text-[#A39382] mb-6 block uppercase"
            >
              Our Philosophy
            </motion.span>
            <motion.h2 
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(2.5rem,7vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter mb-14"
            >
              DRESS ME — ЭТО <br />
              <span className="serif italic font-light text-[#A39382] lowercase tracking-normal">больше</span>, чем магазин
            </motion.h2>
            
            <div className="space-y-12">
              {[
                { t: "Мы — команда профессионалов", d: "Мы создали систему «Стилист + Капсула», чтобы вы не просто покупали вещи, а создавали стратегию успеха." },
                { t: "Свой цех в Сибири", d: "Шьем в Новосибирске с учетом особенностей женских фигур (рост 164/170, размеры 42-56). Идеальная посадка — наш стандарт." },
                { t: "Бесплатный сервис стилистов", d: "Наши стилисты подберут вам образы бесплатно — вы платите только за те вещи, которые идеально «сели»." },
                { t: "Теперь и в Москве", d: "Мы расширяем границы, чтобы ваш шопинг стал профессиональным и вдохновляющим в любой точке страны." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex gap-8 group"
                >
                  <div className="w-px h-auto bg-black/5 group-hover:bg-[#A39382] transition-colors" />
                  <div>
                    <h4 className="font-bold text-lg uppercase mb-3 group-hover:text-[#A39382] transition-colors">{item.t}</h4>
                    <p className="text-black/40 text-sm md:text-base font-light leading-relaxed">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-40 bg-black text-white px-6 text-center overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none opacity-50" />
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      whileInView={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto relative z-10"
    >
      <h2 className="text-[clamp(2.5rem,10vw,7.5rem)] font-black uppercase leading-[0.85] tracking-tighter mb-14">
        Готовы к <br />
        <span className="serif italic font-light text-[#A39382] lowercase tracking-normal">переменам?</span>
      </h2>
      <p className="text-lg md:text-2xl text-white/40 mb-20 font-light max-w-2xl mx-auto leading-relaxed">
        Жмите на кнопку, переходите в Telegram и забирайте все материалы. Внутри вас ждет специальный бонус — возможность забронировать <span className="text-white border-b border-[#A39382]">бесплатную консультацию</span> со стилистом.
      </p>
      
      <motion.a 
        whileHover={{ scale: 1.05, backgroundColor: "#A39382" }}
        whileTap={{ scale: 0.95 }}
        href={TG_LINK}
        className="inline-flex items-center gap-6 bg-white text-black px-12 py-8 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-3xl"
      >
        ЗАБРАТЬ ПОДБОРКУ И НАЧАТЬ ТРАНСФОРМАЦИЮ <ArrowRight size={20} />
      </motion.a>
      
      <div className="mt-40 flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-10 opacity-40 hover:opacity-100 transition-opacity duration-700">
        <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#A39382] rounded-full" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-serif font-black">Dress Me Digital</span>
        </div>
        <div className="flex gap-12">
           {[Instagram, Send, Globe].map((Icon, i) => (
               <a key={i} href="#" className="hover:text-[#A39382] transition-colors"><Icon size={20} /></a>
           ))}
        </div>
        <span className="text-[9px] uppercase tracking-widest font-medium">© 2024 Novosibirsk / Moscow / Digital</span>
      </div>
    </motion.div>
  </footer>
);

// --- MAIN ---

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#A39382] selection:text-white">
      <CustomCursor />
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-[#A39382] z-[1001] origin-left shadow-lg" style={{ scaleX }} />
      <Navbar />
      <main>
        <Hero />
        <Pains />
        <HorizontalScroll />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
