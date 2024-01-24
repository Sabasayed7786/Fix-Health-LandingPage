import React, { useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";

import ResponsiveAppBar from "../components/NavBar/NavBar";
import TeamSection from "../components/TeamSection/TeamSection";
import RecoveryStoriesSection from "../components/PatientStories/PatoentStories";
import PhysioTreatmentSection from "../components/PhysioTreatmentSection/PhysioTreatmentSection";
import Footer from "../components/Footer/Footer";
import FAQSection from "../components/FAQSection/FAQSection";
import AppContactSection from "../components/AppContactSection/AppContactSection";

import BookingModal from "../components/BookingModal/BookingModal";

const LandingPage = () => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  const handleBookNowClick = () => {
    setIsBookingFormOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingFormOpen(false);
  };

  return (
    <div className="landing-page">
      <ResponsiveAppBar onBookNowClick={handleBookNowClick} />
      <HeroSection />
      {isBookingFormOpen && <BookingModal onClose={handleCloseBookingModal} />}
      <TeamSection />
      <RecoveryStoriesSection />
      <PhysioTreatmentSection />
      <AppContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
