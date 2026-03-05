import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, MapPin, Clock, ArrowUp, Instagram, UtensilsCrossed } from 'lucide-react';
import { useRef } from 'react';

const Footer = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: t.footer.ubereats,
      url: 'https://www.ubereats.com/gb/store/rada/Fus6nrNiRUuwWgUkyd8LOA?srsltid=AfmBOopeSIMFBOv29L4G-XF3din5iiy6tmdchsQJCu4TUsn-0Fv6PACq',
      icon: UtensilsCrossed,
    },
    {
      name: t.footer.justeat,
      url: '#',
      icon: UtensilsCrossed,
    },
    {
      name: t.footer.instagram,
      url: '#',
      icon: Instagram,
    },
    {
      name: t.footer.tripadvisor,
      url: '#',
      icon: ExternalLink,
    },
    {
      name: t.footer.googlemaps,
      url: '#',
      icon: MapPin,
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <footer id="contact" className="bg-dark-bg border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-accent/2 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      
      <section className="section-padding relative z-10">
        <div className="container mx-auto container-padding">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20"
          >
            {/* Address */}
            <motion.div variants={itemVariants}>
              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Location</h3>
                  <p className="text-white/70 leading-relaxed text-lg">
                    {t.footer.address}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div variants={itemVariants}>
              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Opening Hours</h3>
                  <p className="text-white/70 mb-2 text-lg">
                    {t.footer.hours}
                  </p>
                  <p className="text-accent font-semibold text-xl">
                    {t.footer.hoursTime}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold mb-6">Order & Connect</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-white/70 hover:text-accent transition-colors group p-3 rounded-lg hover:bg-white/5 animated-underline"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="text-lg">{link.name}</span>
                        <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-white/5 py-8 relative z-10">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Rada Coffee & Eatery. {t.footer.rights}
            </p>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium group"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
