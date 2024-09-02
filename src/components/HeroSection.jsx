import React from "react";
import hero from "../assets/hero.svg"

function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 flex items-center">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          SIMPLIFIED ISLAMIC TEACHINGS FOR KIDS, ADULTS, AND REVERTS
        </h1>
        <p className="text-gray-600 mb-8">
          A beginner-friendly Islamic learning application that helps Muslims
          learn the correct pronunciation of Arabic letters and improve their
          understanding of basic Islamic etiquettes.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full">
          Join Waitlist
        </button>
      </div>
      <div className="w-1/2">
        <img src={hero} alt="Hero" className="w-full" />
      </div>
    </section>
  );
}

export default HeroSection;
