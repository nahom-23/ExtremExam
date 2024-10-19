import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="pt-10 text-white bg-green">
        <div className="flex flex-wrap justify-between max-w-6xl gap-8 py-6 mx-auto mt-4">
          <div>
            <img src={logo} alt="logo image" className="w-56"></img>
          </div>
          <div>
            <h3 className="mb-4 uppercase text-[#E8C5B0]">Menu</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-[#E8C5B0] uppercase">Service</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-row gap-4">
              <li className="py-4 px-4 rounded-full bg-[#E8C5B0] text-green">
                <FaFacebookF />
              </li>
              <li className="py-4 px-4 rounded-full bg-[#E8C5B0] text-green">
                <FaXTwitter />
              </li>
              <li className="py-4 px-4 rounded-full bg-[#E8C5B0] text-green">
                <FaLinkedinIn />
              </li>
            </ul>
          </div>
        </div>
        <footer className="py-6 text-white bg-gray-800">
          <div className="flex items-center my-4 border-t flex-1 border-[#28716F] w-[87%] mx-auto"></div>
          <div className="container px-6 mx-auto">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="mb-4 text-center md:text-left md:mb-0">
                <h2 className="text-lg font-semibold">ExtremExam</h2>
                <p className="text-sm">
                  © 2024 ExtremExam. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-400">
                  Privacy Policy
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  Terms of Service
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
