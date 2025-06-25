import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './login/loginPage';
import RegisterPage from './register/registerPage';
import HomePage from './dashbord/homePage';
import PublicRoute from './PublicRoute';

function ProtectedRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />
        <Route path="/register" element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        } />

        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default ProtectedRoutes;
