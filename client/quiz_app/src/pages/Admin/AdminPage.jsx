import React, { useState } from "react";
import CategoryForm from "./catagory/CategoryForm";
import QuestionForm from "./Questions/QuestionForm";
import TestReport from "./TestReport/TestReport";
import Exam from "./Exam/Exams";
import logo from "../../assets/whitelogo.png";
import CreateTest from "./Test/CreateTest";

const AdminPage = () => {
  const [activeSection, setActiveSection] = useState("category");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="flex flex-col w-1/4 text-white bg-green">
        <div className="w-full m-6 mb-6 ">
          <img src={logo} alt="Logo" className="w-56 mb-4" />
        </div>
        <div className="border-b border-white"></div>
        <nav className="flex-grow mt-6">
          <ul className="ml-10 space-y-8">
            <li className="font-semibold">
              <button
                className="text-xl hover:text-slate-200"
                onClick={() => setActiveSection("category")}
              >
                Category
              </button>
            </li>
            <li className="font-semibold">
              <button
                className="text-xl hover:text-slate-200"
                onClick={() => setActiveSection("questions")}
              >
                Questions
              </button>
            </li>
            <li className="font-semibold">
              <button
                className="text-xl hover:text-slate-200"
                onClick={() => setActiveSection("exam")}
              >
                Exams
              </button>
            </li>
            <li className="font-semibold">
              <button
                className="text-xl hover:text-slate-200"
                onClick={() => setActiveSection("test")}
              >
                Test
              </button>
            </li>
            <li className="font-semibold">
              <button
                className="text-xl hover:text-slate-200"
                onClick={() => setActiveSection("report")}
              >
                Test Report
              </button>
            </li>
          </ul>
        </nav>
        <div className="my-6 ml-10 ">
          <button className="px-12 py-2 font-semibold text-teal-800 bg-white rounded-lg hover:bg-gray-200 ">
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-grow p-12 bg-white">
        {activeSection === "category" && <CategoryForm />}
        {activeSection === "questions" && <QuestionForm />}
        {activeSection === "report" && <TestReport />}
        {activeSection === "exam" && <Exam />}
        {activeSection === "test" && <CreateTest />}
      </section>
    </div>
  );
};

export default AdminPage;
