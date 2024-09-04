import React from "react";
import solution1 from "../../assets/solution1.png";
import solution2 from "../../assets/solution2.png";
import solution3 from "../../assets/solution3.png";
import solution4 from "../../assets/solution4.png";

const Solution = () => {
  const solutions = [
    { Image: solution1, title: "Basic islamic Etiquettes" },
    { Image: solution2, title: "Basic islamic Etiquettes" },
    { Image: solution3, title: "Basic islamic Etiquettes" },
    { Image: solution4, title: "Basic islamic Etiquettes" },
  ];

  return (
    <section className="container mx-auto px-4 py-10 lg:py-16">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#316097]">Our Solution</h1>
        <h2 className="text-xl">
          Noor has amazing solutions created for beginners
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-7 ">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="container mx-auto px-6 py-6  rounded-xl shadow-lg flex flex-col items-center gap-4 max-w-1/4 w-full"
          >
            <img
              src={solution.Image}
              alt=""
              className="lg:h-48 h-64 w-48 lg:w-64  lg:mb-4 object-contain"
            />
            <p className="uppercase text-center">{solution.title}</p>
            <button className="bg-[#316097] rounded-lg text-white py-2 px-4">
              SHOW ME
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solution;
