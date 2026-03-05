import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionDivider from './SectionDivider';
import { Instagram, Facebook, ExternalLink, UtensilsCrossed } from 'lucide-react';
import { useRef } from 'react';
import aboutImage from '../assets/about.jpg';

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
                  src={aboutImage}
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

          {/* Social Media Links - Premium Mobile-First Design */}
          <motion.div
            id="connect"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 sm:mt-20"
          >
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-3 sm:mb-4 text-white">
                Connect With Us
              </h3>
              <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-accent mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
              <motion.a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-4 sm:p-5 rounded-xl bg-dark-bg/40 border border-white/10 hover:border-accent/50 hover:bg-dark-bg/60 backdrop-blur-sm transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 flex-shrink-0">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <span className="text-white/80 group-hover:text-accent transition-colors text-sm sm:text-base font-medium">Instagram</span>
              </motion.a>

              <motion.a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-4 sm:p-5 rounded-xl bg-dark-bg/40 border border-white/10 hover:border-accent/50 hover:bg-dark-bg/60 backdrop-blur-sm transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300 flex-shrink-0">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <span className="text-white/80 group-hover:text-accent transition-colors text-sm sm:text-base font-medium">Facebook</span>
              </motion.a>

              <motion.a
                href="https://www.tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-4 sm:p-5 rounded-xl bg-dark-bg/40 border border-white/10 hover:border-accent/50 hover:bg-dark-bg/60 backdrop-blur-sm transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300 flex-shrink-0">
                  <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <span className="text-white/80 group-hover:text-accent transition-colors text-sm sm:text-base font-medium">TripAdvisor</span>
              </motion.a>

              <motion.a
                href="https://www.ubereats.com/gb/store/rada/Fus6nrNiRUuwWgUkyd8LOA?srsltid=AfmBOopeSIMFBOv29L4G-XF3din5iiy6tmdchsQJCu4TUsn-0Fv6PACq"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-4 sm:p-5 rounded-xl bg-dark-bg/40 border border-white/10 hover:border-accent/50 hover:bg-dark-bg/60 backdrop-blur-sm transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 flex-shrink-0">
                  <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <span className="text-white/80 group-hover:text-accent transition-colors text-sm sm:text-base font-medium">UberEats</span>
              </motion.a>

              <motion.a
                href="https://www.just-eat.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-4 sm:p-5 rounded-xl bg-dark-bg/40 border border-white/10 hover:border-accent/50 hover:bg-dark-bg/60 backdrop-blur-sm transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300 flex-shrink-0">
                  <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <span className="text-white/80 group-hover:text-accent transition-colors text-sm sm:text-base font-medium">Just Eat</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      <SectionDivider />
    </>
  );
};

export default About;
