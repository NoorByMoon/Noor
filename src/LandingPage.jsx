import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main>
        <HeroSection />
        <AboutUs />
      
        <Features />
      </main>
    </div>
  );
}

export default HomePage;
