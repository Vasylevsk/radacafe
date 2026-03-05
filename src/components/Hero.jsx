import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles } from 'lucide-react';
import { useRef } from 'react';
import heroVideo from '../assets/hero.mp4';

const Hero = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Enhanced parallax transforms
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOrder = () => {
    document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={ref}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Premium Parallax Background with Video */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          scale,
          y,
        }}
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ zIndex: 0 }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Sophisticated Multi-layer Overlay - Lighter */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/40 via-dark-bg/30 to-dark-bg/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/20 via-transparent to-dark-bg/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 via-transparent to-transparent" />
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0" 
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 10, 0.2) 100%)'
          }}
        />
      </motion.div>

      {/* Elegant floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity, y: yContent }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          {/* Elegant Top Accent */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/50" />
            <Sparkles className="w-5 h-5 text-accent/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/50" />
          </motion.div>

          {/* Main Title - Premium Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-6 text-white text-center leading-[0.9] tracking-[-0.02em]"
          >
            <span className="block text-accent relative inline-block">
              {t.hero.title}
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          {/* Elegant Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed mb-3 tracking-wide">
              {t.hero.subtitle.split('|')[0]}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-accent/90 font-light italic">
              {t.hero.subtitle.split('|')[1]}
            </p>
          </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
          <motion.button
            onClick={scrollToMenu}
            className="group relative px-12 py-6 bg-accent text-dark-bg font-semibold rounded-full text-lg sm:text-xl overflow-hidden shadow-2xl"
            style={{
              boxShadow: '0 20px 60px rgba(132, 155, 69, 0.4), 0 0 0 1px rgba(132, 155, 69, 0.2)',
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: '0 25px 70px rgba(132, 155, 69, 0.5), 0 0 0 1px rgba(132, 155, 69, 0.3)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 font-medium">{t.hero.cta}</span>
            <motion.div
              className="absolute inset-0 bg-white/30 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.5, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>

            <motion.button
              onClick={scrollToOrder}
              className="px-12 py-6 border-2 border-white/30 text-white font-semibold rounded-full hover:border-accent/50 hover:text-accent transition-all duration-300 text-lg sm:text-xl backdrop-blur-md bg-white/5"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                borderColor: 'rgba(132, 155, 69, 0.5)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              {t.hero.order}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-white/40 text-xs uppercase tracking-widest font-light">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
