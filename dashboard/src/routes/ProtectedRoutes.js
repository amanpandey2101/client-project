import { Navigate,Routes, Route, useLocation, useRoutes } from 'react-router-dom';
import { useEffect } from 'react';
import AdminDashboard from '../components/AdminDashboard';
import SuperAdminDashboard from '../components/SuperAdminDashboard';
import DistributorDashboard from '../components/DistributorDashboard';

const ProtectedRoutes = () => {
    const location = useLocation();
  
      const isAuthenticated = localStorage.getItem('token') !== null;
      useEffect(() => {
        if (!isAuthenticated && location.pathname !== '/login') {
            Navigate('/login', { replace: true });
        }
      }, [isAuthenticated, location]);
    
      return (
        <>
        <Routes>

    
          <Route path="/adminDashboard" element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/login" replace />} />
          <Route path="/superadminDashboard" element={isAuthenticated ? <SuperAdminDashboard /> : <Navigate to="/login" replace />} />
          <Route path="/distributorDashboard" element={isAuthenticated ? <DistributorDashboard /> : <Navigate to="/login" replace />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </>
      );
    };

export default ProtectedRoutes;
