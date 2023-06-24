import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import ProtectedRoutes from './ProtectedRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<ProtectedRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
