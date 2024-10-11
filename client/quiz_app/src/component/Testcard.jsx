import React, { useEffect, useState } from "react";
import axios from "axios";

function Testcard() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/category");
        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <>
      <div className="flex flex-wrap max-w-6xl gap-12 mx-auto my-8">
        {category.map((item, id) => (
          <div
            key={id}
            className="flex-1 min-w-[300px] max-w-[350px] h-[320px] bg-lightbrown rounded-2xl p-4"
          >
            <img
              src={item.photo}
              className="w-[120px] h-[120px] rounded-full mb-4"
              alt="category image"
            />
            <h1 className="mb-1 ml-2 text-2xl font-bold text-green">
              {item.name}
            </h1>

            <p className="text-lg w-[90%] text-gray">{item.detail}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Testcard;
