import React from "react";
import cim from "../assets/mechanical.png";
import { Link } from "react-router-dom";
const Testdis = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl p-10 mx-auto text-center rounded-lg bg-lightbrown mb-11 ">
      <div className="mb-5">
        <img
          src={cim}
          alt="Exam Icon"
          className="mx-auto mb-4 rounded-full w-36"
        />
        <h2 className="text-2xl font-semibold text-green">CIM Final Exam</h2>
        <p className="mt-4 text-gray-600 w-[70%] mx-auto">
          The typical maximum width dimension for standard webpages on desktop
          screens is set at 1920 pixels (1920 x 1080 px). According to
          Statcounter, 24% of desktops use this dimension, followed by 1366 x
          768 pixels at around 16%.
        </p>
      </div>

      <div className="flex justify-between my-10 space-x-16">
        <div>
          <span className="text-4xl font-bold ">45</span>
          <p className="mt-1 font-semibold">QUESTIONS</p>
        </div>
        <div>
          <span className="text-4xl font-bold ">1:30</span>
          <p className="mt-1 font-semibold">HOURS</p>
        </div>
      </div>

      <button className="px-6 py-3 mt-8 text-lg font-semibold uppercase border-2 hover:bg-green hover:text-white">
        <Link to={"/quiz"}>START THE TEST!</Link>
      </button>
    </div>
  );
};

export default Testdis;
