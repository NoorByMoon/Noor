// components/KnowledgeSection.js
import React from "react";
import About from '../../assets/about (2).png'


function AboutUs() {
  return (
    <section className="container mx-auto px-4  py-10 lg:py-16 flex flex-col-reverse lg:flex-row items-center" id="about">
      <div className="lg:w-1/2 w-full">
        <img src= {About} alt="Knowledge" className="w-full" />
      </div>
      <div className="lg:w-1/2 lg:pl-12 w-full">
        <h2 className="text-3xl font-bold  text-gray-800 mb-4">About NOOR</h2>
        <p className="text-gray-600 mb-8">
          A web-based Islamic learning application for beginners. Designed for
          kids, adults, and reverts. Helps users understand basic Islamic
          etiquettes and correct pronunciation or Arabic letters.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full">
          Read More
        </button>
      </div>
    </section>
  );
}

export default AboutUs;
