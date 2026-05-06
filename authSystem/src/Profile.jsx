import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCurrentUser,
  logoutUser,
} from "./services/authService";

import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const res = await getCurrentUser();
      setUser(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch profile");
    }
  };

const handleLogout = async () => {
  try {
    await logoutUser();

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    alert("Logout Successful");

    navigate("/");
  } catch (err) {
    console.log(err);
    alert("Logout Failed");
  }
};

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="avatar">
          {user?.username?.charAt(0).toUpperCase()}
        </div>

        <h1>User Profile</h1>

        <div className="profile-info">
          <p>
            <strong>Username:</strong> {user?.username}
          </p>

          <p>
            <strong>Email:</strong> {user?.email}
          </p>

          <p>
            <strong>Role:</strong> {user?.role}
          </p>
        </div>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;