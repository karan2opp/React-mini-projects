import React, { useEffect, useState } from "react";
import getUser from "./services/userService";
import "./UserInfo.css";

const UserInfo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUser();
      if (res) {
        setUsers(res.data.data.data);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        User Directory
      </h2>

      <div className="grid">
        {users.map((user) => (
          <div key={user.login.uuid} className="card">
            
            <img
              src={user.picture.large}
              alt="user"
              className="avatar"
            />

            <div className="name">
              {user.name.title} {user.name.first} {user.name.last}
            </div>

            <div className="info">{user.email}</div>
            <div className="info">{user.phone}</div>

            <div className="info">
              {user.location.city}, {user.location.country}
            </div>

            <div className="info">Age: {user.dob.age}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;