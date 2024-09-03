import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.svg"

function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-10 lg:py-16 flex flex-col-reverse lg:flex-row items-center">
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          SIMPLIFIED ISLAMIC TEACHINGS FOR KIDS, ADULTS, AND REVERTS
        </h1>
        <p className="text-gray-600 mb-8">
          A beginner-friendly Islamic learning application that helps Muslims
          learn the correct pronunciation of Arabic letters and improve their
          understanding of basic Islamic etiquettes.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full">
          <Link to="/Sign-In">Sign In</Link>
        </button>
      </div>
      <div className="w-full lg:w-1/2">
        <img src={hero} alt="Hero" className="w-full" />
      </div>
    </section>
  );
}

export default HeroSection;
