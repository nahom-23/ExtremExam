import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("/api/category");
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { categories, fetchCategories };
};

export default useFetch;
