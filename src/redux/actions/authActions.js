import { LOGIN, LOGOUT } from "../types/authActionType";

export const login = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const logout = () => {
  // Remove encrypted data from local storage
  localStorage.removeItem("data");
  return {
    type: LOGOUT,
  };
};