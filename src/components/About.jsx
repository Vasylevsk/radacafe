import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionDivider from './SectionDivider';
import { useRef } from 'react';

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <SectionDivider />
      <section id="about" className="section-padding bg-dark-section relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto container-padding relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20 sm:mb-24"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-1 bg-accent mx-auto mb-6 origin-center"
            />
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
              {t.about.title}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Image with Zoom Effect */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] premium-shadow group image-zoom-container">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000"
                  alt="Rada Coffee & Eatery interior"
                  className="w-full h-full object-cover image-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 border border-white/10 rounded-3xl" />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="order-1 lg:order-2 space-y-8"
            >
              <motion.p 
                variants={itemVariants}
                className="text-xl sm:text-2xl text-white/85 leading-relaxed font-light"
              >
                {t.about.p1}
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="text-xl sm:text-2xl text-white/85 leading-relaxed font-light"
              >
                {t.about.p2}
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="text-xl sm:text-2xl text-accent leading-relaxed font-medium italic"
              >
                {t.about.p3}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
      <SectionDivider />
    </>
  );
};

export default About;
