import React, { useEffect, useState } from "react";
import Odometer from "react-odometerjs";
import useFetch from "../hooks/useFetch";
import "odometer/themes/odometer-theme-default.css";
function Statics() {
  const { userData, questions } = useFetch();
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => setCount(userData.length - 1), 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [userData]);

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto my-9 flex items-center bg-green h-[200px] rounded-3xl">
          <div className="flex items-center justify-between w-[80%] mx-auto text-white flex-wrap">
            <h1 className="text-xl tracking-wide uppercase">
              <span className="block text-6xl font-bold text-center truncate">
                <Odometer value={count} format="(.ddd),dd" />+
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
                {questions.length}+
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
