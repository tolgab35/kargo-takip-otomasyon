import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const rol = localStorage.getItem("rol");

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(rol)) {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
