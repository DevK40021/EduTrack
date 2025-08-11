import { FaUserTie } from "react-icons/fa6";
import "./AllUsers.css";

const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
        <div className="icon"><FaUserTie /></div>
      <div className="user-info">
        <p><strong>ID:  </strong> {user.id}</p>
        <p><strong>Name:  </strong> {user.name}</p>
        <p><strong>Role:  </strong> {user.role}</p>
      </div>
    </div>
  );
};

export default UserDetails;