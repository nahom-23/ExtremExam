import React from "react";
import { Link } from "react-router-dom";

function Register({ buttonTitle, buttonStyle, buttonClassName }) {
  const defaultButtonClasses =
    "px-12 py-4 text-2xl font-bold  rounded bg-green text-white";

  return (
    <>
      <Link to="/signup">
        <button
          className={`${defaultButtonClasses} ${buttonClassName} `}
          style={buttonStyle}
        >
          {buttonTitle}
        </button>
      </Link>
    </>
  );
}

export default Register;
