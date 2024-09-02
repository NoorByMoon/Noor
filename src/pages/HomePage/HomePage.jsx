import React from 'react'
import HeroSection from './Features';
import Team from '../HomePage/Team'
import Footer from '../../Components/Shared/Footer'
import Waitlist from "./Waitlist";
import AboutUs from './AboutUs';
import Header from './Header';
import Solution from '../HomePage/Solution';
import Features from './Features';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main>

        <HeroSection />
        <AboutUs />
        <Features/>
        <Solution/>
        <Team/>
        <Waitlist/>
      </main>
      <Footer/>
    </div>
  );
}

export default HomePage