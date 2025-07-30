import Hero from './pages/Hero/Hero';
import Agricultural from './pages/Agricultural/Agricultural';
import Navbar from './components/layout/Navbar/Navbar';
import Landscape from './pages/Landscape/Landscape';
import './App.css'
import Footer from './components/layout/Footer/Footer';
import TrustBanner from './pages/TrustBanner/TrustBanner';
import Why from './pages/Why/Why';
import MarqueeSection from './pages/Marquee/MarqueeSection';
import Review from './pages/Review/Review';
import Branches from './pages/Branches/Branches';

const App = () => {
  return (
    <div className='app overflow-x-hidden'>
      <Navbar />
      <Hero />
      <div id='shop'>
        <Agricultural />
        <Landscape />
      </div>
      <div id='blogs'>
        <TrustBanner />
        <Why />
      </div>
      <div id='contact'>
        <div className='flex justify-center'>
          <p className='text-center bg-[#B0DD1D] rounded-full py-3 px-8'>Contact Us</p>
        </div>
        <MarqueeSection />
        <Review />
        <div className='py-10'>
          <Branches />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;