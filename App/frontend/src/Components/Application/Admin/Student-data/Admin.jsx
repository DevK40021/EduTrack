import { useDispatch, useSelector } from "react-redux";
import { toggleStudent } from "../../../../Redux/actions";
import StudentDetails from "./StudentDetails";
import Header from "../../Main/Header";
import "./Admin.css";
import { TABS } from "../../../../Redux/actions/type";
import Footer from "../../Main/Footer";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../../../../Redux/actions";

const Students = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student);

  const handleTabClick = async (tabType) => {
    console.log("Before dispatch:", tabType);
    dispatch(toggleStudent(tabType));  };

  const handleUsersClick = () =>{
     navigate('/UsersDashboard');
  }
  const handleSignOut = () => {
    dispatch(signOutUser());
    navigate("/", { replace: true });
  };
  
  return (
    <div>
      <Header />
      <button className="admin-btn" onClick={handleUsersClick}>Switch to Users-panel</button>
      <button className="signout-btn" onClick={handleSignOut}>sign-out</button>
      <div className="student-con">
        <section>
          <div className="tabs">  
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                // className={`tab-button ${activeTab === tab ? "active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>
        <h1>Student List</h1>
        <div>
          {students.length > 0 ? students.map((student) => (
            <StudentDetails key={student._id} student={student} />
          )): <p className="no-student">Click on the options above!</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Students;





