import Navbar from "./components/Navbar";
import Carousel from "./components/Carousels";
import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";
import CommitteesSection from "./components/CommitteesSection";
import AboutSection from "./components/AboutSection";
import NewsSection from "./components/NewsSection";
import PatronsSection from "./components/PatronsSection";
import Footer from "./components/Footer";
import Contact from "./components/contact";
import Donate from "./components/Donate";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Carousel />
      <HeroSection />
      <Donate />
      <ServicesGrid />
      <CommitteesSection />
      <AboutSection />
      <NewsSection />
      <PatronsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
