import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";

const QuestionForm = () => {
  const [formData, setFormData] = useState({
    examName: "",
    question: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    answer: "",
    category: "", // Added category field
  });
  const { categories } = useFetch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const choicesArray = [
      formData.choice1,
      formData.choice2,
      formData.choice3,
      formData.choice4,
    ];

    const dataToSend = {
      ...formData,
      choice: choicesArray, // Add choices array to the form data
    };
    try {
      const res = await axios.post("/api/questions", dataToSend);
      console.log("Question submitted successfully", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label className="block text-lg font-medium text-gray-700">
          Category
        </label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="p-2 mt-1 border border-gray-300 rounded-lg w-[60%]"
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category, i) => (
            <option key={i} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <label className="block mt-4 text-lg font-medium text-gray-700">
          Exam
        </label>
        <input
          type="text"
          list="exams"
          value={formData.examName}
          name="examName"
          onChange={handleChange}
          className="block p-2 mt-1 border border-gray-300 rounded-md"
        />
        <datalist id="exams">
          <option>Volvo</option>
        </datalist>

        <label className="block mt-4 text-lg font-medium text-gray-700">
          Question
        </label>
        <textarea
          name="question"
          value={formData.question}
          onChange={handleChange}
          rows="4"
          className="block w-[60%] p-2 mt-1 border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Choice-1
          </label>
          <input
            type="text"
            name="choice1"
            value={formData.choice1}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Choice-2
          </label>
          <input
            type="text"
            name="choice2"
            value={formData.choice2}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Choice-3
          </label>
          <input
            type="text"
            name="choice3"
            value={formData.choice3}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Choice-4
          </label>
          <input
            type="text"
            name="choice4"
            value={formData.choice4}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Answer
          </label>
          <input
            type="text"
            name="answer"
            value={formData.answer}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <button
        type="submit"
        className="px-6 py-2 mt-6 font-semibold text-white bg-teal-800 rounded-lg hover:bg-teal-900"
      >
        Submit Question
      </button>
    </form>
  );
};

export default QuestionForm;
