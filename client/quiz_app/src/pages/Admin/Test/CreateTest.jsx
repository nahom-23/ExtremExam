import React, { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const CreateTest = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [exam, setExams] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    exam: "",
    allowedStudents: "",
    from: "",
    to: "",
    allottedTime: "",
  });
  const [id, setId] = useState(""); // Properly using the state for the selected category ID
  const { categories } = useFetch();

  // When category changes, find the corresponding category ID
  useEffect(() => {
    const selectedCategory = categories.find(
      (category) => category.name === formData.category
    );
    if (selectedCategory) {
      setId(selectedCategory._id); // Set the selected category ID
    }
  }, [formData.category, categories]);

  // Fetch exams based on the selected category ID
  useEffect(() => {
    if (id) {
      const fetchExamsbyCategory = async () => {
        try {
          const res = await axios.get(`/api/exams/category/${id}`);
          setExams(res.data); // Set exams based on selected category
        } catch (error) {
          console.error("Error fetching exams:", error);
        }
      };

      fetchExamsbyCategory();
    }
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Submit logic here
  };

  return (
    <div>
      <label className="block text-lg font-medium text-gray-700">
        Category
      </label>
      <select
        name="category"
        onChange={handleChange}
        value={formData.category}
        className="p-2 mt-1 border border-gray-300 rounded-lg w-[30%]"
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
      <label className="block text-lg font-medium text-gray-700">Exam</label>
      <select
        name="exam"
        onChange={handleChange}
        className="p-2 mt-1 border border-gray-300 rounded-lg w-[30%]"
      >
        <option value="" disabled>
          Select exam
        </option>
        {exam.map((item, i) => (
          <option key={i} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <div>
        <label className="block text-lg font-medium text-gray-700">
          Allotted Time
        </label>
        <input
          type="number"
          name="allottedTime"
          value={formData.allottedTime}
          onChange={handleChange}
          className="block p-2 mt-1 border border-gray-300 rounded-md"
        />
      </div>

      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
        className="my-6 border rounded-sm shadow-lg"
      />
    </div>
  );
};

export default CreateTest;
