import api from "./axios";

// Register
export const registerUser = async (userData) => {
  try {
    const res = await api.post("/users/register", userData);
    return res.data;
  } catch (err) {
    console.log(err.response?.data || err.message);
    throw err;
  }
};

// Login
export const loginUser = async (userData) => {
  try {
    const res = await api.post("/users/login", userData);
    console.log(res)
    return res.data;

    
  } catch (err) {
    console.log(err.response?.data || err.message);
    throw err;
  }
};

// Logout
export const logoutUser = async () => {
  try {
    const res = await api.post("/users/logout");
    return res.data;
  } catch (err) {
    console.log(err.response?.data || err.message);
    throw err;
  }
};

// Current User
export const getCurrentUser = async () => {
  try {
    const res = await api.get("/users/current-user");
    return res.data;
  } catch (err) {
    console.log(err.response?.data || err.message);
    throw err;
  }
};