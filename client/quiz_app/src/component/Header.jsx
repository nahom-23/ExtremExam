import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-between py-8 mx-10 ">
        <div className="cursor-pointer ">
          <Link to="/">
            <img className="w-56" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="menu">
          <ul className="flex space-x-10 cursor-pointer mr-9">
            <li className="font-medium text-header">About</li>
            <li className="">
              <Link to="/tests">Tests</Link>
            </li>
            <li className="">
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="px-8 py-2 text-sm font-bold uppercase transition ease-in-out delay-150 border rounded cursor-pointer border-header hover:bg-green hover:text-white">
          sign In
        </div>
      </div>
    </>
  );
}
