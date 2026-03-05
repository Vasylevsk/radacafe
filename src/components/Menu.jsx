import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ShoppingCart, Sparkles } from 'lucide-react';
import SectionDivider from './SectionDivider';
import { useRef } from 'react';

const Menu = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const menuCategories = {
    en: {
      breakfast: 'BREAKFAST',
      brunch: 'BRUNCH',
      sweet: 'SWEET',
      bowls: 'BOWLS',
    },
    tr: {
      breakfast: 'KAHVALTI',
      brunch: 'BRUNCH',
      sweet: 'TATLI',
      bowls: 'KASELER',
    },
  };

  const menuItems = [
    {
      category: 'breakfast',
      items: [
        { name: 'Traditional Full English', price: '£12.95', image: '🍳', popular: true },
        { name: 'Plant-based Breakfast', price: '£12.95', image: '🥑' },
        { name: 'Vegetarian', price: '£12.95', image: '🥗' },
        { name: 'Guilt Free', price: '£12.95', image: '🥬' },
        { name: 'Shakshuka', price: '£12.95', image: '🍅' },
        { name: 'Turkish Eggs', price: '£10.50', image: '🥚' },
      ],
    },
    {
      category: 'brunch',
      items: [
        { name: 'Eggs Royale', price: '£12.50', image: '🍳' },
        { name: 'Eggs Benedict', price: '£10.50', image: '🥚' },
        { name: 'Hash Benedict', price: '£9.50', image: '🥔' },
        { name: 'Eggs Avocado Florentine', price: '£10.95', image: '🥑' },
        { name: 'Smashed Avocado on Toast', price: '£9.50', image: '🍞' },
        { name: 'Eggs on Toast', price: '£8.95', image: '🍳' },
        { name: 'Omelette', price: '£10.50', image: '🍳' },
        { name: 'Chicken Escalope', price: '£10.95', image: '🍗' },
      ],
    },
    {
      category: 'sweet',
      items: [
        { name: 'French Toast', price: '£10.95', image: '🍞' },
        { name: 'Pancakes', price: '£10.95', image: '🥞', popular: true },
        { name: 'Turkey Bacon & Maple', price: '£10.95', image: '🥓' },
        { name: 'Full English with Pancakes', price: '£14.95', image: '🍳' },
        { name: 'Brioche Benedict', price: '£10.95', image: '🥐' },
      ],
    },
    {
      category: 'bowls',
      items: [
        { name: 'Organic Nutty Granola Bowl', price: '£7.50', image: '🥣' },
        { name: 'Healthy Acai Bowl', price: '£9.50', image: '🫐' },
        { name: 'Kids Breakfast', price: '£6.50', image: '🍳' },
      ],
    },
  ];

  const scrollToOrder = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const categoryVariants = {
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

  return (
    <>
      <section id="menu" className="section-padding bg-dark-bg relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-accent/2 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
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
              {t.menu.title}
            </h2>
            <p className="text-xl sm:text-2xl text-white/60 mb-6 font-light">
              {t.menu.subtitle}
            </p>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div ref={ref} className="space-y-20 sm:space-y-24">
            {menuItems.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={categoryVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-12 text-accent tracking-wide">
                  {menuCategories[language]?.[category.category] || menuCategories.en[category.category]}
                </h3>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                >
                  {category.items.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group relative bg-dark-section rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500 premium-shadow hover:premium-glow"
                      whileHover={{ y: -8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Popular Badge */}
                      {item.popular && (
                        <div className="absolute top-4 right-4 z-20 bg-accent text-dark-bg px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Popular
                        </div>
                      )}
                      
                      {/* Image Area with Zoom Effect */}
                      <div className="relative aspect-square bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 flex items-center justify-center p-8 overflow-hidden image-zoom-container">
                        <motion.div
                          className="text-7xl sm:text-8xl image-zoom"
                          whileHover={{ scale: 1.15, rotate: 8 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          {item.image}
                        </motion.div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-section/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 sm:p-8">
                        <h4 className="text-xl sm:text-2xl font-serif font-bold mb-3 text-white leading-tight">
                          {item.name}
                        </h4>
                        
                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                          <span className="text-2xl sm:text-3xl font-bold text-accent font-serif">
                            {item.price}
                          </span>
                          <motion.button
                            onClick={scrollToOrder}
                            className="p-3 bg-accent text-dark-bg rounded-full hover:bg-accent/90 transition-colors group/btn button-glow-hover"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                          </motion.button>
                        </div>
                      </div>
                      
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider />
    </>
  );
};

export default Menu;
