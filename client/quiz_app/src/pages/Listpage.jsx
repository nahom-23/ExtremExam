import React from "react";
import Testcard from "../component/Testcard";

function Listpage() {
  return (
    <>
      <div className="bg-green">
        <div className="max-w-6xl mx-auto py-9">
          <h1 className="py-8 text-5xl font-bold text-white">Existed Tests</h1>
          <Testcard />
        </div>
      </div>
    </>
  );
}

export default Listpage;
