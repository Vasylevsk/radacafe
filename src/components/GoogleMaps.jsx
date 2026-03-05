import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionDivider from './SectionDivider';
import { useRef } from 'react';

const GoogleMaps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Google Maps embed URL for the address
  const mapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1234567890!2d-0.3083!3d51.4816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI4JzUzLjgiTiAwwrAxOCczMC4wIlc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk";
  
  // Direct link to Google Maps
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=2a+Trico+House+Brentford+London";

  return (
    <>
      <SectionDivider />
      <section className="section-padding bg-dark-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[35rem] h-[35rem] bg-accent/2 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-accent mx-auto mb-6 origin-center"
          />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 tracking-tight">
            Find Us
          </h2>
          <p className="text-lg sm:text-xl text-white/60 mb-6 font-light">
            2a, Trico House, Brentford, London, United Kingdom
          </p>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden premium-shadow"
        >
          {/* Google Maps Embed */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1234567890!2d-0.3083!3d51.4816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760e8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2s2a%20Trico%20House%2C%20Brentford%2C%20London!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            
            {/* Overlay gradient for better integration */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-dark-bg/20 via-transparent to-transparent" />
          </div>

          {/* Address Card Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-auto sm:max-w-md"
          >
            <motion.a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 bg-dark-section/95 backdrop-blur-md rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-300 premium-shadow"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-3 bg-accent/20 rounded-xl group-hover:bg-accent/30 transition-colors">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-serif font-bold mb-1 text-white">Visit Us</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  2a, Trico House<br />
                  Brentford, London<br />
                  United Kingdom
                </p>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
    <SectionDivider />
    </>
  );
};

export default GoogleMaps;
