import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import useFetch from "../../../hooks/useFetch";

const Exams = () => {
  const { categories } = useFetch();
  const navigate = useNavigate(); // Initialize the navigation function

  const handleCategoryClick = (categoryId) => {
    // Navigate to the exam list page with the categoryId in the URL
    navigate(`/category/${categoryId}/exams`);
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">Exams</h2>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-white uppercase border border-gray-300 bg-green">
                NO
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-white uppercase border border-gray-300 bg-green">
                Category
              </th>
              <th className="px-6 py-3 font-medium tracking-wider text-left text-white uppercase border border-gray-300 bg-green">
                exams
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index} className="bg-white">
                <td className="px-6 py-4 font-medium border border-gray-300 ">
                  {index + 1}
                </td>
                <td className="px-6 py-4 text-gray-500 border border-gray-300">
                  {category.name}
                </td>
                <td
                  className="px-6 py-4 text-blue-500 border border-gray-300 cursor-pointer"
                  onClick={() => handleCategoryClick(category._id)} // Pass the categoryId
                >
                  View Exams
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exams;
