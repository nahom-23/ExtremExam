import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
      <Link to={"/test"}>
        <div className="flex flex-wrap max-w-6xl gap-12 mx-auto">
          {category.map((item, id) => (
            <div
              key={id}
              className="flex-1 min-w-[300px] max-w-[350px] h-[320px] bg-lightbrown rounded-2xl p-4"
            >
              <h1>{item.name}</h1>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </Link>
    </>
  );
}

export default Testcard;
