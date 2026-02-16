
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronRight, Send, Globe, Instagram, MessageCircle } from 'lucide-react';

// --- Константы ---
const TG_LINK = "https://t.me/dress_me_shop_bot";

const IMAGES = [
  "https://i.postimg.cc/NfLwVMGj/2026_02_16_09_21_44.jpg",
  "https://i.postimg.cc/wT3dPvx6/2026_02_16_09_21_58.jpg",
  "https://i.postimg.cc/ZK0hgRYY/2026_02_16_09_22_08.jpg",
  "https://i.postimg.cc/fTkhFLWs/2026_02_16_09_22_19.jpg",
  "https://i.postimg.cc/RVqz8FC6/2026_02_16_09_23_03.jpg"
];

const SOLUTIONS = [
  { id: "01", title: "АУДИТ ГАРДЕРОБА", desc: "Узнайте, что выбросить прямо сейчас, чтобы освободить место для новой жизни.", img: IMAGES[2] },
  { id: "02", title: "ДЕЛОВОЙ ЭТИКЕТ", desc: "5 фатальных ошибок в офисе, которые мешают вам зарабатывать больше.", img: IMAGES[3] },
  { id: "03", title: "ФОРМУЛА 5=15", desc: "Как собрать чемодан в отпуск или капсулу на работу, имея всего 5 вещей.", img: IMAGES[4] },
  { id: "04", title: "ШОПИНГ-СТРАТЕГИЯ", desc: "Как сходить в магазин 1 раз в год и закрыть все вопросы со стилем.", img: IMAGES[0] },
  { id: "05", title: "МАСТЕРСТВО СОБЕСЕДОВАНИЯ", desc: "Образы, которые заставляют работодателя влюбиться в ваше резюме.", img: IMAGES[1] },
];

// --- Компоненты ---

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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-10 ${scrolled ? 'py-4' : 'py-8'}`}
    >
      <div className={`max-w-[1600px] mx-auto flex justify-between items-center ${scrolled ? 'bg-white/80 backdrop-blur-xl border border-black/5 shadow-sm px-6 py-3 rounded-2xl' : ''}`}>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#A39382] rounded-full" />
          <span className="text-sm font-black tracking-tighter uppercase font-serif">Dress Me</span>
        </div>
        <a href={TG_LINK} className="bg-black text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#A39382] transition-colors">
          Telegram
        </a>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "circOut" }}
          className="max-w-5xl"
        >
          <span className="inline-block text-[10px] uppercase tracking-[0.6em] text-[#A39382] mb-6 font-bold">Premium Style System</span>
          <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-black leading-[0.9] tracking-tighter uppercase mb-10">
            Ваш гардероб <br />
            <span className="serif italic font-light text-[#A39382] lowercase tracking-normal">больше не будет</span> <br />
            прежним.
          </h1>
          <p className="text-black/50 text-base md:text-xl font-light leading-relaxed max-w-2xl mb-12">
            Заберите систему из 5 чек-листов от топ-стилистов Dress Me. Мы научим вас одеваться дорого, тратить мало и забыть о фразе «мне нечего надеть» навсегда.
          </p>
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={TG_LINK}
            className="inline-flex items-center gap-4 bg-black text-white px-10 py-6 rounded-full text-xs font-black uppercase tracking-widest group shadow-2xl"
          >
            Получить 5 инструкций бесплатно <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
          </motion.a>
        </motion.div>
      </div>

      <motion.div style={{ y }} className="absolute right-0 top-1/4 w-1/3 h-2/3 opacity-20 lg:opacity-100 hidden md:block">
        <img src={IMAGES[0]} className="w-full h-full object-cover rounded-l-[100px] grayscale" alt="Fashion" />
      </motion.div>
    </section>
  );
};

const Pains = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const items = [
    { t: "Шкаф забит, а образа нет", d: "Вещи живут отдельно друг от друга, не складываясь в систему." },
    { t: "Вещи «из прошлого»", d: "Вы изменились, а ваш гардероб застрял в 2015-м." },
    { t: "Импульсивный шопинг", d: "Покупка «красивого платья», которое потом не с чем носить." },
    { t: "Страх ошибки", d: "Вы боитесь ярких цветов, поэтому выбираете «серое и безопасное»." }
  ];

  return (
    <section ref={ref} className="py-32 bg-[#1A1A1A] text-white px-6 md:px-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-24">
          <span className="text-[10px] font-bold tracking-[0.5em] text-[#A39382] mb-6 block uppercase">The Problems</span>
          <h2 className="text-[clamp(2rem,7vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter">
            Почему 90% женщин <br />
            <span className="serif italic font-light text-[#A39382] lowercase tracking-normal">недовольны</span> своим видом?
          </h2>
          <p className="mt-8 text-white/30 text-lg md:text-xl font-light">Дело не в отсутствии денег или фигуры. Проблема в другом:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group border-l border-white/10 pl-8 py-4 hover:border-[#A39382] transition-colors"
            >
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-[#A39382] transition-colors">{item.t}</h3>
              <p className="text-white/40 font-light leading-relaxed text-sm md:text-base">{item.d}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="mt-24 pt-12 border-t border-white/5 text-center"
        >
          <p className="text-[#A39382] text-xl md:text-3xl font-serif italic">Мы создали решение для тех, кто ценит свое время.</p>
        </motion.div>
      </div>
    </section>
  );
};

const KnowledgeBase = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  const springX = useSpring(x, { stiffness: 40, damping: 20 });

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#FAF9F6]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x: springX }} className="flex gap-12 md:gap-24 px-6 md:px-24 items-center">
          
          <div className="min-w-[80vw] lg:min-w-[45vw]">
            <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-black uppercase leading-[0.85] tracking-tighter text-black">
              5 шагов <br />
              <span className="serif italic font-light text-[#A39382] lowercase tracking-normal ml-8">к идеалу</span>
            </h2>
            <p className="mt-8 text-black/40 text-sm md:text-lg font-light max-w-md">PDF-доступ ко всем секретам индустрии. Листайте, чтобы увидеть наполнение базы знаний.</p>
            <div className="mt-10 flex items-center gap-4 text-[#A39382]">
                <div className="w-10 h-px bg-[#A39382]" />
                <span className="text-[9px] uppercase font-bold tracking-[0.3em] animate-pulse">Листайте →</span>
            </div>
          </div>

          {SOLUTIONS.map((item, i) => (
            <motion.div 
              key={i} 
              className="min-w-[85vw] md:min-w-[35vw] aspect-[3/4.2] relative group rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110" alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <span className="text-[10px] font-bold text-[#A39382] mb-3 block">{item.id} / 05</span>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                  {item.title}
                </h3>
                <p className="text-white/50 text-xs md:text-sm font-light leading-relaxed line-clamp-3">{item.desc}</p>
              </div>
            </motion.div>
          ))}
          
          <div className="min-w-[50vw] flex flex-col items-center justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href={TG_LINK}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-black flex flex-col items-center justify-center text-center group transition-all duration-700"
            >
              <span className="text-white text-xl md:text-2xl font-serif italic">Забрать всё</span>
              <div className="mt-4 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#A39382] transition-colors">
                <ChevronRight className="text-white" size={20} />
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
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-32 md:py-48 bg-white px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img src={IMAGES[4]} className="w-full h-full object-cover" alt="Production" />
            </motion.div>
            <div className="absolute -bottom-10 -right-5 md:-right-10 bg-black text-white p-8 md:p-12 rounded-full hidden sm:block">
              <span className="text-3xl md:text-5xl font-black block mb-2 leading-none">Сибирь</span>
              <span className="text-[9px] uppercase tracking-widest text-white/40">Собственное производство</span>
            </div>
          </div>

          <div ref={ref}>
            <span className="text-[10px] font-bold tracking-[0.5em] text-[#A39382] mb-6 block uppercase">About Brand</span>
            <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter mb-12">
              Dress Me — это <br />
              <span className="serif italic font-light text-[#A39382] lowercase tracking-normal">больше</span>, чем магазин
            </h2>
            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="w-12 h-px bg-black/10 mt-3" />
                <div>
                  <h4 className="font-bold text-lg uppercase mb-2">Система «Стилист + Капсула»</h4>
                  <p className="text-black/40 text-sm md:text-base font-light">Шьем в Новосибирске с учетом особенностей женских фигур: рост 164/170, размеры 42-56.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="w-12 h-px bg-black/10 mt-3" />
                <div>
                  <h4 className="font-bold text-lg uppercase mb-2">Бесплатный сервис</h4>
                  <p className="text-black/40 text-sm md:text-base font-light">Наши стилисты подбирают вам образы бесплатно — вы платите только за те вещи, которые идеально «сели».</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="w-12 h-px bg-black/10 mt-3" />
                <div>
                  <h4 className="font-bold text-lg uppercase mb-2">Теперь в Москве</h4>
                  <p className="text-black/40 text-sm md:text-base font-light">Мы стали еще ближе, чтобы ваш шопинг стал профессиональным и комфортным.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-32 bg-black text-white px-6 text-center overflow-hidden relative">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none" />
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      whileInView={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto relative z-10"
    >
      <h2 className="text-[clamp(2.5rem,10vw,7rem)] font-black uppercase leading-[0.85] tracking-tighter mb-12">
        Готовы к <br />
        <span className="serif italic font-light text-[#A39382] lowercase tracking-normal">переменам?</span>
      </h2>
      <p className="text-lg md:text-xl text-white/40 mb-16 font-light max-w-xl mx-auto">
        Жмите на кнопку, забирайте все материалы. Внутри вас ждет специальный бонус — бесплатная консультация со стилистом.
      </p>
      <motion.a 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={TG_LINK}
        className="inline-flex items-center gap-4 bg-[#A39382] text-white px-12 py-8 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 shadow-2xl"
      >
        Забрать подборку и начать трансформацию <ChevronRight size={18} />
      </motion.a>
      
      <div className="mt-32 flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
        <span className="text-[10px] uppercase tracking-[0.4em] font-serif font-black">Dress Me Digital</span>
        <div className="flex gap-8 opacity-40">
           <Instagram size={18} />
           <Send size={18} />
           <Globe size={18} />
        </div>
        <span className="text-[9px] uppercase tracking-widest text-white/20">© 2024 Novosibirsk - Moscow</span>
      </div>
    </motion.div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] selection:bg-[#A39382] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Pains />
        <KnowledgeBase />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
