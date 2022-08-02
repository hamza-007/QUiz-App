import React from "react";
import { Navigate } from "react-router-dom";
import { checkUser } from "../context/userContext";

const ProtectedRoute = ({ children }) => {
  const user = checkUser();

  if (!user) {
    return <Navigate to='/login' />;
  }

  return children;
};
export default ProtectedRoute;
