import React from "react";
import { Link } from "react-router-dom";

function Register({ buttonTitle, buttonStyle, buttonClassName }) {
  const defaultButtonClasses =
    "px-12 py-4 text-2xl font-bold  rounded bg-green text-white";

  return (
    <>
      <button
        className={`${defaultButtonClasses} ${buttonClassName} `}
        style={buttonStyle}
      >
        <Link to="/signup"> {buttonTitle} </Link>
      </button>
    </>
  );
}

export default Register;
