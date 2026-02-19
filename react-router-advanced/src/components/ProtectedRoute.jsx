import React from "react";
import { Navigate } from "react-router-dom";

// Simple auth simulation
const isAuthenticated = () => {
  return localStorage.getItem("username") ? true : false;
};

// Protected Route component
function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
