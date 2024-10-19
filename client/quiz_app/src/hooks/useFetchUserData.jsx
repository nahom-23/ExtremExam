import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const useFetchUserData = () => {
  const [userData, setUserData] = useState([]);

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
  useEffect(() => {
    fetchUserData();
  }, []);
  return { userData };
};

export default useFetchUserData;
