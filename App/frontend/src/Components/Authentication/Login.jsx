import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Application/Main/Header";
import { loginUser } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate returns a function

  const auth = useSelector((state) => state.auth);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(loginUser(id, password));
  };

  useEffect(() => {
    if (auth.token) {
      setLoading(false);
      navigate("/StudentDashboard"); // Use navigate as a function to redirect
    }
    if (auth.error) {
      setLoading(false);
      alert(auth.error); // Display error message
    }
  }, [auth, navigate]);

  return (
    <div className="main-con">
      <Header />
      <form className="login-con" onSubmit={onFormSubmit}>
        <h2>VJIT Login</h2>
        <input
          type="text"
          placeholder="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "LOGIN"}
        </button>
      </form>
    </div>
  );
};

export default Login;
