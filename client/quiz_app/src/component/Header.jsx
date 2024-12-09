import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Register from "./Register";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

export default function Header() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between py-4 px-4 md:px-10">
        {/* Logo Section */}
        <div className="cursor-pointer">
          <Link to="/">
            <img className="w-40 md:w-56" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Menu for larger screens */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10">
          <Link to="/" className="font-medium text-header hover:text-green">
            About
          </Link>
          <Link to="/listpages" className="font-medium text-header hover:text-green">
            Tests
          </Link>
          <Link to="/contact" className="font-medium text-header hover:text-green">
            Contact us
          </Link>
        </nav>

        {/* User actions */}
        <div className="hidden md:block">
          {user ? (
            <button
              onClick={logout}
              className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
            >
              Log out
            </button>
          ) : (
            <Register
              buttonTitle="Sign up"
              buttonClassName="px-6 py-2 text-sm bg-white font-bold uppercase transition ease-in-out delay-150 border rounded text-green cursor-pointer border-header hover:bg-green hover:text-white"
              buttonStyle={{ color: "black" }}
            />
          )}
        </div>

        {/* Hamburger menu for mobile */}
        <div className="block md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-500 transition rounded focus:outline-none hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden px-4 pb-4 transition-all ease-in-out`}
      >
        <nav className="flex flex-col space-y-4">
          <Link to="/" className="font-medium text-header hover:text-green">
            About
          </Link>
          <Link to="/listpages" className="font-medium text-header hover:text-green">
            Tests
          </Link>
          <Link to="/contact" className="font-medium text-header hover:text-green">
            Contact us
          </Link>
          {user ? (
            <button
              onClick={logout}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
            >
              Log out
            </button>
          ) : (
            <Register
              buttonTitle="Sign up"
              buttonClassName="w-full px-6 py-2 text-sm bg-white font-bold uppercase transition ease-in-out delay-150 border rounded text-green cursor-pointer border-header hover:bg-green hover:text-white"
              buttonStyle={{ color: "black" }}
            />
          )}
        </nav>
      </div>
    </header>
  );
}
