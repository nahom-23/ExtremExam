import React from "react";
import logo from "../assets/logo.png";
export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center mx-10 py-8 ">
        <div className="cursor-pointer ">
          <img className="w-56" src={logo} alt="logo" />
        </div>
        <div className="menu">
          <ul className="flex space-x-10 mr-9 cursor-pointer">
            <li className="text-header font-medium">About</li>
            <li className="">Tests</li>
            <li className="">Contact us</li>
          </ul>
        </div>
        <div className="uppercase text-sm cursor-pointer border border-header px-8 py-2 rounded font-bold hover:bg-green hover:text-white transition delay-150 ease-in-out">
          sign In
        </div>
      </div>
    </>
  );
}
