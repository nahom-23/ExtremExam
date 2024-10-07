import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/Header";

// Route pages

import Home from "./pages/Home";
import Testcard from "./component/Testcard";
import Testdis from "./pages/Testdis";
import Contactus from "./pages/Contactus";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Listpage from "./pages/Listpage";
import ExamList from "./pages/Admin/Exam/ExamList";
import ExamDetail from "./pages/Admin/Exam/ExamDetail";
import Test from "./pages/Test";
import AdminPage from "./pages/Admin/AdminPage";

// context provider
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

// Import Layouts
import MainLayout from "./Layout/MainLayout";
import NoHeaderLayout from "./Layout/NoHeaderLayout";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          {/* Routes with Header and footer */}

          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/tests" element={<Testcard />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/listpages" element={<Listpage />} />
            <Route path="/test" element={<Testdis />} />
          </Route>

          {/* Routes with out Header and footer */}
          <Route element={<NoHeaderLayout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz" element={<Test />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/category/:categoryId/exams" element={<ExamList />} />
            <Route path="/exams/:examId" element={<ExamDetail />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
