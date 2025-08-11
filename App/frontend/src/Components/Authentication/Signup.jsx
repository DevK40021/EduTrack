import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../Application/Main/Header";
import { signupUser } from "../../Redux/actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Assuming role is included in the form
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate returns a function

  const auth = useSelector((state) => state.auth);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert("Passwords do not match!");
      return;
    }
    dispatch(signupUser(id, name, role, password, passwordConfirm));
  };

  useEffect(() => {
    if (auth.token) {
      setLoading(false);
      navigate("/StudentDashboard");
    }
    if (auth.error) {
      setLoading(false);
      alert(auth.error); // Display error message
    }
  }, [auth, navigate]);

  return (
    <div className="main-con">
      <Header />
      <form className="login-con signup-con" onSubmit={onFormSubmit}>
        <h2>VJIT Sign-up</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Signing-Up" : "SIGNUP"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
