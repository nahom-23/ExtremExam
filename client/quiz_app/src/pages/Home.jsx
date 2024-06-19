import React from "react";
import Header from "../component/Header";
import Hero from "../assets/Hero.png";
import Statics from "../component/Statics";
function Home() {
  return (
    <>
      <Header />
      <div>
        <div className="flex max-w-6xl mx-auto py-9 animate-my-animation">
          <div className="w-[550px] mt-14">
            <h1 className="text-7xl text-green font-bold leading-relax ">
              Take Online Test & Unlock Your Future
            </h1>
            <p className="py-6 text-[24px] text-header">
              Discover Your Path to Success Now!
            </p>
            <button className="bg-green text-white py-4 px-12 rounded font-bold text-2xl">
              Register
            </button>
          </div>
          <div>
            <img
              className="w-[600px] h-[550px] "
              src={Hero}
              alt="student and teacher image"
            />
          </div>
        </div>
      </div>
      <Statics />
    </>
  );
}

export default Home;
