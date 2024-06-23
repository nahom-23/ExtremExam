import React from "react";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { useState } from "react";
function Register({ buttonTitle, buttonStyle, buttonClassName }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleOpenLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  const handleOpenSignup = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };
  const defaultButtonClasses =
    "px-12 py-4 text-2xl font-bold  rounded bg-green text-white";
  return (
    <>
      <button
        className={`${defaultButtonClasses} ${buttonClassName} `}
        onClick={handleOpenSignup}
        style={buttonStyle}
      >
        {buttonTitle}
      </button>
      {/* Render Signup or Login modal based on state */}
      {isModalOpen && isLogin && (
        <Login
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          toggleForm={toggleForm}
        />
      )}
      {isModalOpen && !isLogin && (
        <Signup
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          toggleForm={toggleForm}
        />
      )}
    </>
  );
}

export default Register;
