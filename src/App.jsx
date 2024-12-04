import Features from './components/Features';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import WorkFlow from './components/WorkFlow';

const App = () => {
  return (
    <>
      <NavBar />
      <div className="pt-20 px-10 max-w-7xl mx-auto space-y-20">
        <HeroSection />
        <Features />
        <WorkFlow />
        <Pricing />
        <Reviews />
      </div>
      <Footer />
    </>
  );
};

export default App;
