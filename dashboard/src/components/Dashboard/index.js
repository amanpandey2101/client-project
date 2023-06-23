import { Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from '../AdminDashboard/index';
import SuperAdminDashboard from '../SuperAdminDashboard/index';
import DistributorDashboard from '../DistributorDashboard/index';

// Custom PrivateRoute component for authenticated routes
function PrivateRoute({ element, isAuthenticated, redirectTo }) {
  return isAuthenticated ? (
    element
  ) : (
    <Navigate to={redirectTo} replace state={{ from: window.location.pathname }} />
  );
}

function Dashboard({ isAuthenticated }) {
  return (
    <Routes>
      <Route
        path="/adminDashboard/*"
        element={<PrivateRoute element={<AdminDashboard />} isAuthenticated={isAuthenticated} redirectTo="/login" />}
      />
      <Route
        path="/superadminDashboard/*"
        element={<PrivateRoute element={<SuperAdminDashboard />} isAuthenticated={isAuthenticated} redirectTo="/login" />}
      />
      <Route
        path="/distributorDashboard/*"
        element={<PrivateRoute element={<DistributorDashboard />} isAuthenticated={isAuthenticated} redirectTo="/login" />}
      />
    </Routes>
  );
}

export default Dashboard;
