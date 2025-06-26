import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './login/loginPage';
import RegisterPage from './register/registerPage';
import HomePage from './dashbord/homePage';

function ProtectedRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default ProtectedRoutes;
