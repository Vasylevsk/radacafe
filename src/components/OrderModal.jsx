import { motion, AnimatePresence } from 'framer-motion';
import { X, UtensilsCrossed, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const OrderModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const ubereatsUrl = 'https://www.ubereats.com/gb/store/rada/Fus6nrNiRUuwWgUkyd8LOA?srsltid=AfmBOopeSIMFBOv29L4G-XF3din5iiy6tmdchsQJCu4TUsn-0Fv6PACq';
  const justeatUrl = 'https://www.just-eat.co.uk';

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-dark-bg/90 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-md bg-dark-section rounded-3xl border border-white/10 premium-shadow overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-5 h-5 text-white/70" />
          </button>

          {/* Content */}
          <div className="p-8 sm:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                <UtensilsCrossed className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2 text-white">
                {t.orderModal.title}
              </h3>
              <p className="text-white/60 text-sm sm:text-base">
                {t.orderModal.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {/* UberEats */}
              <motion.a
                href={ubereatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-dark-bg/50 border border-white/10 hover:border-accent/50 hover:bg-dark-bg/70 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 flex-shrink-0">
                  <UtensilsCrossed className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-1">{t.orderModal.ubereats}</h4>
                  <p className="text-white/60 text-sm">{t.orderModal.ubereatsDesc}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors flex-shrink-0" />
              </motion.a>

              {/* Just Eat */}
              <motion.a
                href={justeatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-dark-bg/50 border border-white/10 hover:border-accent/50 hover:bg-dark-bg/70 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300 flex-shrink-0">
                  <UtensilsCrossed className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-1">{t.orderModal.justeat}</h4>
                  <p className="text-white/60 text-sm">{t.orderModal.justeatDesc}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors flex-shrink-0" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OrderModal;
