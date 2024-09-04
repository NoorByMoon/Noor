import React from "react";
import {
  FaBookReader,
  FaMicrophone,
  FaLaptop,
  FaUserGraduate,
} from "react-icons/fa";

function Features() {
  const features = [
    { title: "Engaging Learning Experience", icon: <FaBookReader /> },
    { title: "Accurate Pronunciation", icon: <FaMicrophone /> },
    { title: "Comprehensive E-Learning", icon: <FaLaptop /> },
    { title: "Beginner-Specific", icon: <FaUserGraduate /> },
  ];

  return (
    <section className="container mx-auto px-4 py-16" id="features">
      <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-lg shadow-lg p-4 text-center"
          >
            <div className="text-4xl mb-4 text-blue-500">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 break-words">
              {feature.title}
            </h3>
            <p className="text-gray-600">Feature description goes here</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
