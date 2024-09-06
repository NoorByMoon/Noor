import React from 'react'

const Waitlist = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="1000"
      className="bg-[#ffff] min-h-[70vh] p-9 flex justify-center items-center"
    >
      <div className="bg-hidden md:bg-block md:bg-waitList bg-contain bg-no-repeat w-full max-w-3xl max-h-[40vh] flex justify-center items-center">
        <div className="bg-[rgba(217,217,217,0.5)] backdrop-blur-lg w-full max-w-xl  lg:max-w-2xl lg:h-[30vh] shadow-2xl rounded-3xl flex justify-center items-center">
          <div className=" text-center p-4 text-[#316097]">
            <h1 className="text-2xl lg:text-3xl font-bold ">
              Ready to Join Our Waitlist?
            </h1>
            <p className="text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              dolores deserunt numquam eos a sunt accusantium tempore sit
              ratione odio.
            </p>
            <form action="">
              <div className="flex gap-2 mt-5">
                <input
                  type="text"
                  id="email"
                  placeholder="email"
                  className=" flex-grow block px-3 py-3 bg-white border border-gray-300 rounded-full text-sm shadow-sm placeholder-gray-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
                <button className=" px-6 py-3 text-lg bg-blue-500 text-white rounded-full shadow-md  ">
                  Get started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist