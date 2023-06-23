import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Dashboard from './components/Dashboard/index';
import Sidebar from "./components/AdminDashboard/index";



function App() {
  return (
    <div className="min-h-full h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8">
     <Router>
      
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/sidebar" element={<Sidebar/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            
        </Routes>
      </Router>
      
    </div>
  
  );
}

export default App;