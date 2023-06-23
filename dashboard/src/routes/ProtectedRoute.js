import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component }) => {
  // Replace this with your actual authentication logic
  const isAuthenticated = true;

  return isAuthenticated ? (
    <Route render={() => <Component />} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoute;
