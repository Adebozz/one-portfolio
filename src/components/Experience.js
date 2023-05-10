import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full
    h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
      justify-center w-full h-full text-white"
      >
        <div>
          <p
            className="text-4xl font-bold border-b4
          border-gray-500 p-2 inline"
          >
            Experience
          </p>
          <p className="py-6">This are the technologies i have worked with</p>
        </div>

        <div
          className="w-full grid-cols-2 sm:grid-cols-3
          gap-8 text-center py-8 px-12 sm:px-0"
        >
          <div
            className="shadow-md hover:scale-105 duration-500
          py-2 rounded-lg"
          >
            <img src="" alt="" className="w-20 mx-auto" />
            <p>Html</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
