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
import Events from "../pages/Events";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/donate", element: <Donate /> },
  { path: "/contact-form", element: <ContactForm /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/events/:view", element: <Events /> }, 
  { path: "/events", element: <Navigate to="/events/list" replace /> },
  { path: "/service", element: <ServicesGrid /> },
  { path: "/committe", element: <CommitteesSection /> },
  { path: "/form", element: <Forms /> },
  { path: "/census-form", element: <CensusForm /> },
  { path: "/membership-registration", element: <MemberRegistration /> },
  { path: "/duplicate-card", element: <RequestDuplicateCard /> },
  { path: "*", element: <Navigate to="/" replace /> },
];

function AppRouting() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-10">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default AppRouting;
