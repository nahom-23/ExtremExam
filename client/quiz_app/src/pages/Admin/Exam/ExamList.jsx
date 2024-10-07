import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // For capturing URL parameters
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ExamsList = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  // Capture categoryId from the URL
  const [exams, setExams] = useState([]);
  const fetchExamsbyCategory = async () => {
    try {
      const res = await axios.get(`/api/exams/category/${categoryId}`);
      setExams(res.data);
    } catch (error) {
      console.error("Error fetching exams:", error);
    }
  };
  useEffect(() => {
    fetchExamsbyCategory();
  }, [categoryId]);
  console.log(exams);
  const handleExamClick = (examId) => {
    navigate(`/exams/${examId}`); // Navigate to the exam's detail page
  };
  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">
        Exams for Category {categoryId}
      </h2>
      {exams.length === 0 ? (
        <p>no exams in this categories</p>
      ) : (
        <ul className="w-[40%] shadow-lg">
          {exams.map((exam) => (
            <>
              <li
                key={exam._id}
                className="p-2 border-b cursor-pointer border-gray"
                onClick={() => handleExamClick(exam._id)}
              >
                {exam.name}
              </li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExamsList;
