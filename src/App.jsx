import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import GoogleMaps from './components/GoogleMaps';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <PageLoader />
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <GoogleMaps />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
