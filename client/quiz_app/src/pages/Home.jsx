import React from "react";
import Hero from "../assets/Hero.png";
import Statics from "../component/Statics";
import Listpage from "./Listpage";
import Contactus from "./Contactus";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="max-w-6xl mx-auto py-9">
        <div className="flex ">
          <div className="w-[550px] mt-14 animate-my-text">
            <h1 className="font-bold text-7xl text-green leading-relax ">
              Take Online Test & Unlock Your Future
            </h1>
            <p className="py-6 text-[24px] text-header">
              Discover Your Path to Success Now!
            </p>
            <button className="px-12 py-4 text-2xl font-bold text-white rounded bg-green">
              <Link to="/signup">Register</Link>
            </button>
          </div>
          <div className="animate-my-images">
            <img
              className="w-[600px] h-[550px] "
              src={Hero}
              alt="student and teacher image"
            />
          </div>
        </div>
        <Statics />
      </div>
      <Listpage />
      <Contactus />
      <Footer />
    </>
  );
}

export default Home;
