import React from "react";

function Testcard() {
  return (
    <>
      <div className="flex">
        {country.map((country, index) => (
          <div key={index} className="bg-lightbrown h-10 w-[200px]">
            <img src={country.images} alt=""></img>
            <h2>{country.title}</h2>
            <p>{country.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Testcard;
