import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import Tablelist from "../../../component/Tablelist";

const CategoryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    photo: null,
    detail: "",
  });
  const [formError, setFormError] = useState({
    name: "",
    description: "",
    photo: null,
    detail: "",
  });

  const { categories, fetchCategories } = useFetch();
  const [open, setOpen] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setFormError({ ...formError, [name]: "" });
  };
  const handlePhoto = (e) => {
    const file = e.target.files[0]; // Access the first file from the input
    setFormData((prevState) => ({
      ...prevState,
      photo: file, // Store the image file in formData
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, photo, detail } = formData;
    const errors = {};

    if (!name) {
      errors.name = "Name is required";
    } else if (name.length < 3 || name.length > 20) {
      errors.name = "Name must be between 3 and 20";
    }
    if (!description) {
      errors.description = "description is required";
    } else if (description.length < 2 || description.length > 3) {
      errors.description = "description must be between 2 and 3";
    }
    if (!photo) {
      errors.photo = "photo is required";
    }
    if (!detail) {
      errors.detail = "detail is required";
    }
    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      return;
    }
    setFormError({});

    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("detail", detail);
    data.append("photo", photo);

    try {
      const res = await axios.post("/api/category", data);
      console.log(res);
      fetchCategories(); // Fetch the updated list after adding a new category
      setOpen(!open);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {open ? (
        <div>
          <button
            type="submit"
            className="px-6 py-2 mt-6 font-semibold text-white bg-teal-900 rounded-lg hover:bg-teal-800"
            onClick={() => setOpen(!open)}
          >
            Create Category
          </button>
          <Tablelist reports={categories} />
        </div>
      ) : (
        <div>
          <h1 className="mb-10 text-3xl font-bold">Add New Category</h1>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Category Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block p-2 mt-1 border border-gray-300 rounded-md"
                aria-label="Enter category name"
              />
              {formError.name && (
                <p className="py-2 font-sans text-sm text-red-500">
                  {formError.name}
                </p>
              )}
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Category Code
              </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="block p-2 mt-1 border border-gray-300 rounded-md"
              />

              {formError.description && (
                <p className="py-2 font-sans text-sm text-red-500">
                  {formError.description}
                </p>
              )}
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Category description
              </label>
              <textarea
                name="detail"
                value={formData.detail}
                onChange={handleChange}
                className="block p-2 mt-1 border border-gray-300 rounded-md"
              />

              {formError.description && (
                <p className="py-2 font-sans text-sm text-red-500">
                  {formError.detail}
                </p>
              )}
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Category image
              </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handlePhoto}
                className="block p-2 mt-1 border border-gray-300 rounded-md"
              />

              {formError.photo && (
                <p className="py-2 font-sans text-sm text-red-500">
                  {formError.photo}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="px-6 py-2 mt-6 font-semibold text-white bg-teal-800 rounded-lg hover:bg-teal-900"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default CategoryForm;
