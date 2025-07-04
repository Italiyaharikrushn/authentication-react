// import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
// import LoginPage from './login/loginPage';
// import RegisterPage from './register/registerPage';
// import HomePage from './dashbord/homePage';
// import { useSelector } from 'react-redux';

// function ProtectedRoute({ isAuthenticated }) {
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// }

// function ProtectedRoutes() {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
//           <Route path="/home" element={<HomePage />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default ProtectedRoutes;



import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './login/loginPage';
import RegisterPage from './register/registerPage';
import HomePage from './dashbord/homePage';
import { useSelector } from 'react-redux';

function ProtectedRoutes() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Router>
      <Routes>
        {!isAuthenticated && (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
        {isAuthenticated && (
          <>
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default ProtectedRoutes;
