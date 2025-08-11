import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Application/Main/Home.jsx";
import Login from "./Components/Authentication/Login.jsx";
import Signup from "./Components/Authentication/Signup.jsx";
import Students from "./Components/Application/Admin/Student-data/Admin.jsx";
import Users from "./Components/Application/Admin/Clg-data/Users.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/StudentDashboard" element={<Students />} />
        <Route path="/UsersDashboard" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
