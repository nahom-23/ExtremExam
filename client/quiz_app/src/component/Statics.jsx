import React, { useEffect, useState } from "react";
import useFetchUserData from "../hooks/useFetchUserData";

function Statics() {
  const { userData } = useFetchUserData();
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto my-9 flex items-center bg-green h-[200px] rounded-3xl">
          <div className="flex items-center justify-between w-[80%] mx-auto text-white flex-wrap">
            <h1 className="text-xl tracking-wide uppercase">
              <span className="block text-6xl font-bold text-center ">
                {userData.length - 1}+
              </span>
              Active Users Right Now
            </h1>
            <h1 className="text-xl tracking-wide uppercase">
              <span className="block text-6xl font-bold text-center ">
                {userData.length}+
              </span>
              Tests
            </h1>
            <h1 className="text-xl tracking-wide uppercase">
              <span className="block text-6xl font-bold text-center ">
                {userData.length}+
              </span>
              questions
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statics;
