import React from "react";
import{useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";

import Sidebar from "./components/AdminDashboard/index";
import SuperAdminDashboard from "./components/SuperAdminDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import DistributorDashboard from "./components/DistributorDashboard";
import AdminDashboard from "./components/AdminDashboard/index";
import Unauthorized from "./components/Auth/Unauthorized";


const RequireAuth = ({ allowedRoles, children }) => {
  // Replace this with your actual authentication logic
  const isAuthenticated = true; // Check if user is authenticated
  const userRole = 'admin'; // Replace with user's actual role

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};
// Main routing component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          path="/protected"
          element={
            <RequireAuth allowedRoles={['admin', 'superadmin', 'distributor']}>
              <Routes>
                <Route path="/" element={<Navigate to="/adminDashboard" replace />} />
                <Route path="/adminDashboard" element={<AdminDashboard />} />
                <Route path="/superadminDashboard" element={<SuperAdminDashboard />} />
                <Route path="/distributorDashboard" element={<DistributorDashboard />} />
              </Routes>
            </RequireAuth>  
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
