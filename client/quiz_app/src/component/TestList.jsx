import axios from "axios";
import React, { useEffect, useState } from "react";

const TestList = () => {
  const [tests, setTests] = useState([]);
  const getAllTests = async () => {
    try {
      const res = await axios.get("/api/test");
      setTests(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllTests();
  }, []);
  return (
    <div>
      <table className="border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Exam</th>
            <th className="px-4 py-2 border">From</th>
            <th className="px-4 py-2 border">To</th>
            <th className="px-4 py-2 border">Send Email</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test) => (
            <tr className="border">
              <td className="px-4 py-2 border">{test.exam.name}</td>
              <td className="px-4 py-2 border">{test.from}</td>
              <td className="px-4 py-2 border">{test.to}</td>
              <td className="px-4 py-2 ">
                <button className="px-2 py-1 text-white rounded-lg bg-green">
                  send Email
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestList;
