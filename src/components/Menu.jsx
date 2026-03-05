import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ShoppingCart, Sparkles } from 'lucide-react';
import SectionDivider from './SectionDivider';
import OrderModal from './OrderModal';
import { useRef, useState } from 'react';

// Import images
import traditionalFullEnglish from '../assets/Traditional Full English.png';
import vegetarianFullEnglish from '../assets/Vegetarian Full English.png';
import guiltFreeBreakfast from '../assets/Guilt Free Breakfast.png';
import plantBasedBreakfast from '../assets/Plant based breakfast.png';
import healthyAcaiBowl from '../assets/Healthy Acai Bowl.png';

const Menu = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

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
        { 
          name: 'Traditional Full English', 
          price: '£15.50', 
          image: traditionalFullEnglish,
          imageType: 'photo',
          popular: true,
          description: 'A hearty and traditional British breakfast served with sausage, turkey bacon, free-range eggs, seasoned grilled mushrooms, hash brown, grilled tomato (topped with nut-free pesto), baked beans & toast.'
        },
        { 
          name: 'Vegetarian Full English', 
          price: '£15.50', 
          image: vegetarianFullEnglish,
          imageType: 'photo',
          description: 'A satisfying morning meal with free-range eggs, grilled halloumi, hash browns, baked beans, vegetarian sausage, seasoned grilled mushrooms, grilled tomato (topped with nut-free pesto), avocado, roasted mixed seeds & toast.'
        },
        { 
          name: 'Guilt Free Breakfast', 
          price: '£15.50', 
          image: guiltFreeBreakfast,
          imageType: 'photo',
          description: 'A low-carb, healthy kickstart to your day with avocado, roasted mixed seeds, fresh tomato, steamed spinach, free-range poached eggs, seasoned grilled mushrooms and baked beans.'
        },
        { 
          name: 'Plant based breakfast', 
          price: '£15.50', 
          image: plantBasedBreakfast,
          imageType: 'photo',
          description: 'A nutritious and cruelty-free way to start the day with scrambled tofu, baked beans, avocado, vegan sausage, grilled tomato (topped with nut-free pesto), seasoned, grilled mushrooms, hash brown, roasted mixed seeds, toasted seeded sourdough.'
        },
        { 
          name: 'Healthy Acai Bowl', 
          price: '£11.50', 
          image: healthyAcaiBowl,
          imageType: 'photo',
          description: 'Served with granola, Greek yogurt, dried coconut and seeds with seasonal fruits'
        },
        { 
          name: 'Organic Nutty Granola', 
          price: '£9.50', 
          image: '🥣',
          description: 'Served with yoghurt banana and seasonal fruits'
        },
      ],
    },
    {
      category: 'brunch',
      items: [
        { 
          name: 'Eggs Royale', 
          price: '£14.95', 
          image: '🍳',
          description: 'Two free-range poached eggs, smoked salmon, topped with hollandaise sauce, Sprinkled with roasted mixed seeds.'
        },
        { 
          name: 'Eggs Benedict', 
          price: '£12.95', 
          image: '🥚',
          description: 'Two free-range poached eggs, turkey bacon, topped with hollandaise sauce, served on a toasted muffin, drizzled with chilli oil.'
        },
        { 
          name: 'Hash Benedict', 
          price: '£11.95', 
          image: '🥔',
          description: 'Hash browns, poached or fried eggs, topped with hollandaise sauce and drizzled with chilli oil.',
          popular: true
        },
        { 
          name: 'Eggs Avocado Florentine', 
          price: '£13.50', 
          image: '🥑',
          description: 'Two free-range poached eggs, avocado and spinach, served on a toasted muffin. Sprinkled with roasted mixed seeds.'
        },
        { 
          name: 'Smashed Avocado on Toast', 
          price: '£11.95', 
          image: '🍞',
          description: 'Freshly, smashed avocado served on toasted seeded sourdough with roasted mixed seeds.'
        },
        { 
          name: 'Eggs on Toast', 
          price: '£10.95', 
          image: '🍳',
          description: 'Free-range eggs cooked according to your preference - poached/scrambled/fried, served on toasted seeded sourdough.'
        },
        { 
          name: 'Omelette with Choice of 3 Toppings', 
          price: '£12.50', 
          image: '🍳',
          description: 'With a choice of four toppings: cheese/spinach/mushroom/onion/ tomato/bacon/sausage/peppers - served alongside salad and chips or toast.'
        },
        { 
          name: 'Turkish eggs', 
          price: '£12.50', 
          image: '🥚',
          description: 'A delicious and unique breakfast with greek yoghurt, garlic and poached eggs, sprinkled with spicy, melted butter and garnished with fresh herbs. Served with toasted sourdough'
        },
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
        { name: 'Organic Nutty Granola Bowl', price: '£9.50', image: '🥣' },
        { name: 'Healthy Acai Bowl', price: '£11.50', image: '🫐' },
      ],
    },
  ];

  const openOrderModal = () => {
    setIsOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
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
                      <div className="relative aspect-square bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 overflow-hidden image-zoom-container">
                        {item.imageType === 'photo' ? (
                          <motion.img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover image-zoom"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            loading="lazy"
                          />
                        ) : (
                          <motion.div
                            className="w-full h-full flex items-center justify-center text-7xl sm:text-8xl image-zoom"
                            whileHover={{ scale: 1.15, rotate: 8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            {item.image}
                          </motion.div>
                        )}
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-section/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 sm:p-8">
                        <h4 className="text-xl sm:text-2xl font-serif font-bold mb-3 text-white leading-tight">
                          {item.name}
                        </h4>
                        
                        {item.description && (
                          <p className="text-white/60 text-sm mb-4 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        )}
                        
                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                          <span className="text-2xl sm:text-3xl font-bold text-accent font-serif">
                            {item.price}
                          </span>
                        <motion.button
                          onClick={openOrderModal}
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

      {/* Order Modal */}
      <OrderModal isOpen={isOrderModalOpen} onClose={closeOrderModal} />
    </section>
    <SectionDivider />
    </>
  );
};

export default Menu;
