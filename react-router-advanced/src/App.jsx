import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Post from "./components/Post";
import Login from "./components/Login";

// Simulate authentication
const isAuthenticated = () => localStorage.getItem("auth") === "true";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic Route */}
        <Route path="/post/:id" element={<Post />} />

        <Route path="/login" element={<Login />} />

        {/* Fallback */}
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </div>
  );
};

export default App;
