// Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Main/Header";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <Header />
      <div className="home-con">
        <h1 className="greeting">Welcome!</h1>
        <p className="tag">Please Login or Signup</p>
        <section className="btns">
          <button className="lbtn" onClick={handleLoginClick}>
            Login
          </button>
          <button className="sbtn lbtn" onClick={handleSignupClick}>
            Signup
          </button>
        </section>
      </div>
    </div>
  );
};

export default Home;
