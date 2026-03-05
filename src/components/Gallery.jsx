import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionDivider from './SectionDivider';
import { useRef } from 'react';

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&q=80&w=800',
      alt: 'Matcha latte',
      span: 'col-span-1 sm:col-span-1',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&q=80&w=800',
      alt: 'Avocado toast',
      span: 'col-span-1 sm:col-span-1',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=800',
      alt: 'Pancakes',
      span: 'col-span-1 sm:col-span-2',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
      alt: 'Full English breakfast',
      span: 'col-span-1 sm:col-span-2',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800',
      alt: 'Cafe interior',
      span: 'col-span-1 sm:col-span-1',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
      alt: 'Coffee',
      span: 'col-span-1 sm:col-span-1',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800',
      alt: 'Brunch',
      span: 'col-span-1 sm:col-span-1',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
      alt: 'Food',
      span: 'col-span-1 sm:col-span-1',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <section id="gallery" className="section-padding bg-dark-section relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-[35rem] h-[35rem] bg-accent/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        
        <div className="container mx-auto container-padding relative z-10">
          <motion.div
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
              {t.gallery.title}
            </h2>
            <p className="text-xl sm:text-2xl text-white/60 mb-6 font-light">
              {t.gallery.subtitle}
            </p>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
          >
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`${item.span} aspect-square rounded-xl overflow-hidden cursor-pointer group relative premium-shadow image-zoom-container`}
                whileHover={{ scale: 1.03, zIndex: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover image-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 border border-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-medium">{item.alt}</p>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <SectionDivider />
    </>
  );
};

export default Gallery;
