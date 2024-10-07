import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Test = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div>
      <div className="flex items-center justify-between py-8 mx-10 ">
        <div className="">
          <img className="w-56" src={logo} alt="logo" />
        </div>
        <div className="menu">
          <h1>timer</h1>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-4xl p-10 ">
          <div className="flex flex-col items-center mb-6 bg-gray-300 rounded-full">
            <div className="w-1/4 h-2 mx-auto rounded-full bg-lightgreen"></div>
            <div className="mt-3 text-3xl text-gray-800">59:00</div>
          </div>

          <div className="mb-6 text-lg font-bold text-gray-800 ">
            4. Who is the last king of Ethiopia?
          </div>

          <div className="my-10 ml-16 space-y-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="question"
                value="Minilik II"
                checked={selectedOption === "Minilik II"}
                onChange={handleOptionChange}
                className="w-5 h-5 text-teal-600 form-radio"
              />
              <span className="ml-3 text-lg font-semibold text-gray-700">
                Minilik II
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="question"
                value="Tewodros"
                checked={selectedOption === "Tewodros"}
                onChange={handleOptionChange}
                className="w-5 h-5 text-teal-600 form-radio"
              />
              <span className="ml-3 text-lg font-semibold text-gray-700">
                Tewodros
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="question"
                value="Haile Selassie"
                checked={selectedOption === "Haile Selassie"}
                onChange={handleOptionChange}
                className="w-5 h-5 text-teal-600 form-radio"
              />
              <span className="ml-3 text-lg font-semibold text-gray-700">
                Haile Selassie
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="question"
                value="Meles Zenawi"
                checked={selectedOption === "Meles Zenawi"}
                onChange={handleOptionChange}
                className="w-5 h-5 text-teal-600 form-radio"
              />
              <span className="ml-3 text-lg font-semibold text-gray-700">
                Meles Zenawi
              </span>
            </label>
          </div>

          <div className="flex justify-between py-10">
            <button className="px-6 py-2 text-lg font-semibold text-white rounded bg-lightgreen hover:bg-emerald-900">
              Previous
            </button>
            <button className="px-6 py-2 text-lg font-semibold text-white rounded bg-lightgreen hover:bg-emerald-900">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
