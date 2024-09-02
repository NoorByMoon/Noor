import React from 'react'

const Waitlist = () => {
  return (
    <section className="bg-[#ffff] min-h-[70vh] p-9 flex justify-center items-center">
        <div className="bg-hidden md:bg-block md:bg-waitList bg-contain bg-no-repeat w-full max-w-3xl max-h-[40vh] flex justify-center items-center">
          <div className="bg-[rgba(217,217,217,0.5)] backdrop-blur-lg w-full max-w-xl  lg:max-w-2xl lg:h-[30vh] shadow-2xl rounded-3xl flex justify-center items-center">
            <div className=" text-center p-4 text-[#316097]">
              <h1 className="text-2xl lg:text-3xl font-bold ">
                Ready to Join Our Waitlist?
              </h1>
              <p className="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas dolores deserunt numquam eos a sunt accusantium tempore
                sit ratione odio.
              </p>
              <button className="mt-6 px-6 py-2 text-lg bg-[#FFB300] text-white rounded-full shadow-md hover:bg-[#FF9900] transition-colors duration-300">
                Get started
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist