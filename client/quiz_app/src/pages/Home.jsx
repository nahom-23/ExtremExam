import React, { useState } from "react";
import Statics from "../component/Statics";
import Listpage from "./Listpage";
import Contactus from "./Contactus";
import HeroSection from "../component/HeroSection";

function Home() {
  // true for Login, false for Signup

  return (
    <>
      <HeroSection />
      <Statics />
      <Listpage />
      <Contactus />
    </>
  );
}

export default Home;
