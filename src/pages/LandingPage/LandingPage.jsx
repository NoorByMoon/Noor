import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./HeroSection";
import Team from "./Team";
import Waitlist from "./Waitlist";
import AboutUs from "./AboutUs";
import Header from "./Header";
import Solution from "./Solution";
import Features from "./Features";
import Footer from "../../Components/Shared/Footer";

const LandingPage = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white bg-cover">
      <Header />
      <main>
        <HeroSection handleOrderPopup={handleOrderPopup} />
        <AboutUs handleOrderPopup={handleOrderPopup} />
          <Features handleOrderPopup={handleOrderPopup} />
          <Solution handleOrderPopup={handleOrderPopup} />
          <Team handleOrderPopup={handleOrderPopup} />
          <Waitlist handleOrderPopup={handleOrderPopup} />
          <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
