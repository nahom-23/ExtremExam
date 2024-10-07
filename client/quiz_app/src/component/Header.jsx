import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Register from "./Register";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

export default function Header() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <>
      <div className="flex items-center justify-between py-8 mx-10 ">
        <div className="cursor-pointer">
          <Link to="/">
            <img className="w-56" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="menu">
          <ul className="flex space-x-10 cursor-pointer mr-9">
            <li className="font-medium text-header">About</li>
            <li className="">
              <Link to="/listpages">Tests</Link>
            </li>
            <li className="">
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        {user ? (
          <div>
            <button onClick={logout}>log out</button>
          </div>
        ) : (
          <Register
            buttonTitle="Sign up"
            buttonClassName="px-6 py-2 text-sm bg-white  font-bold uppercase transition ease-in-out delay-150 border rounded text-green  cursor-pointer border-header hover:bg-green hover:text-white"
            buttonStyle={{ color: "black" }}
          />
        )}
      </div>
    </>
  );
}
