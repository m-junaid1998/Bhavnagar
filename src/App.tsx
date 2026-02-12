import Navbar from "./pages/Navbar";
import Carousel from "./pages/Carousels";
import HeroSection from "./pages/HeroSection";
import ServicesGrid from "./pages/ServicesGrid";
import CommitteesSection from "./pages/CommitteesSection";
import AboutSection from "./pages/AboutSection";
import NewsSection from "./pages/NewsSection";
import PatronsSection from "./pages/PatronsSection";
import Footer from "./pages/Footer";
import Donate from "./pages/Donate";
import ContactForm from "./pages/ContactForm";
import Forms from "./pages/Forms";
import CensusForm from "./pages/CensusForm";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Carousel />
      <CensusForm/>
      <Forms/>
      <HeroSection />
      <Donate />
      <ServicesGrid />
      <CommitteesSection />
      <AboutSection />
      <NewsSection />
      <PatronsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
