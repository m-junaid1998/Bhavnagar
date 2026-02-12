import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./homeroutes/HomePage";
import Footer from "../pages/Footer";
import AboutUs from "../pages/AboutUs";
import Donate from "../pages/Donate";
import ContactForm from "../pages/ContactForm";
import Navbar from "../pages/Navbar";
import Forms from "../pages/Forms";
import ServicesGrid from "../pages/ServicesGrid";
import CommitteesSection from "../pages/CommitteesSection";
import MemberRegistration from "../pages/MemberRegistration";
import RequestDuplicateCard from "../pages/RequestDuplicateCard";
import CensusForm from "../pages/CensusForm";

function AppRouting() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="pt-10">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/service" element={<ServicesGrid />} />
        <Route path="/committe" element={<CommitteesSection />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/form" element={<Forms />} />
        <Route path="/census-form" element={<CensusForm />} />
        <Route path="/membership-registration" element={<MemberRegistration />} />
        <Route path="/duplicate-card" element={<RequestDuplicateCard />} />
        <Route  path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default AppRouting;
