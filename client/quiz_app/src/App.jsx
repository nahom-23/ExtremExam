import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import Testcard from "./component/Testcard";
import Contactus from "./pages/Contactus";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Listpage from "./pages/Listpage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tests" element={<Testcard />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/ " element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listpages" element={<Listpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
