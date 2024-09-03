import React from "react";
import HeroSection from './HeroSection'
import Team from "./Team";
import Waitlist from "./Waitlist";
import AboutUs from "./AboutUs";
import Header from "./Header";
import Solution from "./Solution";
import Features from "./Features";
import Footer from "../../Components/Shared/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white bg-cover">
      <Header />
      <main>
        <HeroSection />
        <AboutUs />
        <Features />
        <Solution />
        <Team />
        <Waitlist />
        <Footer/>
      </main>
    </div>
  );
};

export default LandingPage;
