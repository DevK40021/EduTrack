import React, { useEffect } from "react";
import Header from "../../Main/Header";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, toggleTab, signOutUser } from "../../../../Redux/actions";
import UserDetails from "./AllUsers";
import {
  ALL_USERS,
  USER_TABS,
  ADMINS,
  FACULTIES,
} from "../../../../Redux/actions/type";
import "./AllUsers.css";
import Footer from "../../Main/Footer";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.user);
  const CurrentTab = useSelector((state) => state.CurrentTab);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleUsersClick = () => {
    navigate("/StudentDashboard");
  };

  const handleSignOut = () => {
    dispatch(signOutUser());
    navigate("/");
  };

  return (
    <div>
      <Header />
      <button className="admin-btn" onClick={handleUsersClick}>
        Switch to Students-panel
      </button>
      <button className="signout-btn" onClick={handleSignOut}>
        sign-out
      </button>
      <section>
        <div className="tabs">
          {USER_TABS.map((tab) => (
            <button key={tab} onClick={() => dispatch(toggleTab(tab))}>
              {tab}
            </button>
          ))}
        </div>
      </section>
      <div className="user-con">
        <h1>Users List</h1>
        <div>
          {/* {Users.filter((user) => {
            if (CurrentTab === ALL_USERS) return true;
            if (CurrentTab === ADMINS) return user.role === "admin";
            if (CurrentTab === FACULTIES) return user.role === "faculty";
            return false;
          }).map((user) => (
            <UserDetails key={user._id} user={user} />
          ))} */}
          {Users &&
            Users.filter((user) => {
              if (CurrentTab === ALL_USERS) return true;
              if (CurrentTab === ADMINS) return user.role === "admin";
              if (CurrentTab === FACULTIES) return user.role === "faculty";
              return false;
            }).map((user) => <UserDetails key={user._id} user={user} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Users;
