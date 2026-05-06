import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "./services/authService";
import "./AUTH.css";

function AUTH() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    role: "USER",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async () => {
  try {
    if (isLogin) {
      const res = await loginUser({
        username: formData.username,
        password: formData.password,
      });

      // store tokens
      localStorage.setItem(
        "accessToken",
        res.data.accessToken
      );

      localStorage.setItem(
        "refreshToken",
        res.data.refreshToken
      );

      alert("Login Successful");

      navigate("/profile");
    } else {
      await registerUser(formData);

      alert("Registration Successful");

      setIsLogin(true);
    }
  } catch (err) {
    console.log(err);

    alert(isLogin ? "Login Failed" : "Registration Failed");
  }
};

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>{isLogin ? "Login" : "Register"}</h1>

        {!isLogin && (
          <>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </>
        )}

        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}
        </p>

        <span onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Create Account" : "Login Instead"}
        </span>
      </div>
    </div>
  );
}

export default AUTH;