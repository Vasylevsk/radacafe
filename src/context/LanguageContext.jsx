import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      menu: 'Menu',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    hero: {
      title: 'RADA COFFEE & EATERY',
      subtitle: 'Serving Brentford Since 2018 | Halal Brekkie, Brunch & All the Good Stuff',
      cta: 'Explore Menu',
      order: 'Order Delivery',
    },
    about: {
      title: 'About Us',
      p1: 'All our food is Halal. We are here to serve you and provide the finest dishes and beverages for a fair price. We are easy to get to and friendly to deal with.',
      p2: 'Try our popular Traditional Full English Breakfast and Signature Burger.',
      p3: 'If you\'re feeling under the weather or lazy then we can come to you.',
    },
    menu: {
      title: 'Our Menu',
      subtitle: 'Handcrafted with care, served with excellence',
      items: {
        breakfast: {
          name: 'Traditional Full English Breakfast',
          description: 'Our ever-popular Halal Full English Breakfast, made with the finest ingredients and served fresh.',
          price: '£12.99',
        },
        burger: {
          name: 'Signature Burger',
          description: 'Our signature Halal burger, a customer favorite made with premium ingredients.',
          price: '£14.99',
        },
        beverages: {
          name: 'Fine Beverages',
          description: 'Selection of premium beverages to complement your meal perfectly.',
          price: 'From £3.50',
        },
      },
      orderNow: 'Order Now',
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'See what our customers are enjoying',
    },
    footer: {
      address: '2a, Trico House, Brentford, London, United Kingdom',
      hours: 'Monday - Sunday',
      hoursTime: '09:00 - 17:30',
      ubereats: 'UberEats',
      justeat: 'JustEat',
      instagram: 'Instagram',
      tripadvisor: 'TripAdvisor',
      googlemaps: 'Google Maps',
      rights: 'All rights reserved. All food is Halal certified.',
    },
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      menu: 'Menü',
      gallery: 'Galeri',
      contact: 'İletişim',
    },
    hero: {
      title: 'RADA COFFEE & EATERY',
      subtitle: '2018\'den Beri Brentford\'da Hizmet | Helal Kahvaltı, Brunch ve Tüm İyi Şeyler',
      cta: 'Menüyü Gör',
      order: 'Sipariş Ver',
    },
    about: {
      title: 'Hakkımızda',
      p1: 'Tüm yemeklerimiz Helal'dir. Size hizmet etmek ve adil bir fiyata en iyi yemekleri ve içecekleri sunmak için buradayız. Bize ulaşmak kolay ve iş yapmak dostane.',
      p2: 'Popüler Geleneksel İngiliz Kahvaltımızı ve İmza Burger\'ımızı deneyin.',
      p3: 'Kendinizi hasta veya tembel hissediyorsanız, biz size gelebiliriz.',
    },
    menu: {
      title: 'Menümüz',
      subtitle: 'Özenle hazırlanmış, mükemmellikle servis edilmiş',
      items: {
        breakfast: {
          name: 'Geleneksel İngiliz Kahvaltısı',
          description: 'Her zaman popüler Helal İngiliz Kahvaltımız, en iyi malzemelerle yapılmış ve taze servis edilir.',
          price: '£12.99',
        },
        burger: {
          name: 'İmza Burger',
          description: 'Premium malzemelerle yapılmış, müşteri favorisi imza Helal burger\'ımız.',
          price: '£14.99',
        },
        beverages: {
          name: 'İnce İçecekler',
          description: 'Yemeğinizi mükemmel şekilde tamamlayacak premium içecek seçimi.',
          price: '£3.50\'den',
        },
      },
      orderNow: 'Şimdi Sipariş Ver',
    },
    gallery: {
      title: 'Galeri',
      subtitle: 'Müşterilerimizin ne yediğini görün',
    },
    footer: {
      address: '2a, Trico House, Brentford, Londra, Birleşik Krallık',
      hours: 'Pazartesi - Pazar',
      hoursTime: '09:00 - 17:30',
      ubereats: 'UberEats',
      justeat: 'JustEat',
      instagram: 'Instagram',
      tripadvisor: 'TripAdvisor',
      googlemaps: 'Google Maps',
      rights: 'Tüm hakları saklıdır. Tüm yemekler Helal sertifikalıdır.',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
