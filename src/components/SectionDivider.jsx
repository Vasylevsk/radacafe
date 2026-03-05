import { motion } from 'framer-motion';

const SectionDivider = ({ variant = 'default' }) => {
  if (variant === 'none') return null;

  return (
    <div className="relative w-full h-px elegant-divider">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 origin-left"
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </motion.div>
    </div>
  );
};

export default SectionDivider;
