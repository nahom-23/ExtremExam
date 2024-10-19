import React from "react";
import Register from "./Register";
import Hero from "../assets/Hero.png";
import { useAuthContext } from "../hooks/useAuthContext";

export default function HeroSection() {
  const { user } = useAuthContext();

  return (
    <div className="mx-auto md:max-w-6xl">
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-[550px] animate-my-text">
          <h1 className="text-4xl font-bold text-green leading-relax md:text-7xl">
            Take Online Test & Unlock Your Future
          </h1>
          <p className="py-6 text-[24px] text-header">
            Discover Your Path to Success Now!
          </p>
          {user ? (
            <div> see courses </div>
          ) : (
            <Register buttonTitle="Register" />
          )}
        </div>
        <div className="animate-my-images">
          <img
            className="w-[600px] h-[550px]"
            src={Hero}
            alt="student and teacher image"
          />
        </div>
      </div>
    </div>
  );
}
