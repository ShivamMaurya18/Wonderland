import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import InfoSection from "./components/InfoSection";
import StatsSection from "./components/StatsSection";
import RidesCarousel from "./components/RidesCarousel";
import AboutSky from "./components/AboutSky";
import Rules from "./components/Rules";
import ReachUs from "./components/ReachUs";
import BookingPolicy from "./components/BookingPolicy";
import ResortStay from "./components/ResortStay";
import TicketPackages from "./components/TicketPackages";
import CheckoutPage from "./components/CheckoutPage";
import TicketConfirmation from "./components/TicketConfirmation";
import GroupEventBooking from "./components/GroupEventBooking";
import ParkAttractions from "./components/ParkAttractions";
import AllRides from "./components/AllRides";

// Home page as a grouped component
const Home = () => (
  <>
    <HeroSection />
    <AboutSection />
    <InfoSection />
    <StatsSection />
    <RidesCarousel />
  </>
);

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-sky" element={<AboutSky />} />
        <Route path="/about/rules" element={<Rules />} />
        <Route path="/about/contact" element={<ReachUs />} />
        <Route path="/about/policy" element={<BookingPolicy />} />
        <Route path="/resort" element={<ResortStay />} />
        <Route path="/tickets/packages" element={<TicketPackages />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/tickets/confirmation" element={<TicketConfirmation />} />
        <Route path="/tickets/group-booking" element={<GroupEventBooking />} />
        <Route path="/rides/attractions" element={<ParkAttractions />} />
        <Route path="/rides/all" element={<AllRides />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
