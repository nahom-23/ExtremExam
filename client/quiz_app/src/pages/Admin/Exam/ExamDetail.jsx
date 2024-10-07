import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ExamDetail = () => {
  const { examId } = useParams(); // Get the examId from the URL
  const [exam, setExam] = useState(null); // State to store exam details
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch exam details based on examId
  const fetchExamDetails = async () => {
    try {
      const res = await axios.get(`/api/exams/${examId}`); // Adjust the API endpoint if needed
      setExam(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching exam details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExamDetails(); // Fetch exam details when component mounts
  }, [examId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!exam) {
    return <div>Exam not found.</div>;
  }
  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">Exam: {exam.name}</h2>
      <h3 className="mb-2 text-xl font-semibold">Questions:</h3>
      <ul>
        {exam.questions.map((question) => (
          <li key={question._id} className="p-2 border-b">
            <p>
              <strong>Question:</strong> {question.question}
            </p>
            <p>
              <strong>Choices:</strong>{" "}
              {question.choice.length > 0
                ? question.choice.map((choice, i) => (
                    <p key={i}>
                      {i + 1}
                      {","} {choice}
                    </p>
                  ))
                : "No choices"}
            </p>
            <p>
              <strong>Answer:</strong> {question.answer}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamDetail;
