import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 hover:border-accent transition-all duration-300 bg-dark-section/50 backdrop-blur-sm"
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <motion.span
        className={`text-sm font-semibold transition-colors duration-300 ${
          language === 'en' ? 'text-accent' : 'text-white/50'
        }`}
        animate={language === 'en' ? { scale: 1.1 } : { scale: 1 }}
      >
        EN
      </motion.span>
      <span className="text-white/30">|</span>
      <motion.span
        className={`text-sm font-semibold transition-colors duration-300 ${
          language === 'tr' ? 'text-accent' : 'text-white/50'
        }`}
        animate={language === 'tr' ? { scale: 1.1 } : { scale: 1 }}
      >
        TR
      </motion.span>
    </motion.button>
  );
};

export default LanguageToggle;
