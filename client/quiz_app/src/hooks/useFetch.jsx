import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [categories, setCategories] = useState([]);
  const [userData, setUserData] = useState([]);
  const [questions, SetQuestions] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);
  useEffect(() => {
    fetchUserData();
  }, []);
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("/api/category");
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchQuestions = async () => {
    try {
      const res = await axios.get("/api/questions");
      SetQuestions(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUserData = async () => {
    try {
      const res = await axios.get("/api/users");
      if (res.data) {
        setUserData(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { categories, fetchCategories, userData, questions };
};

export default useFetch;
