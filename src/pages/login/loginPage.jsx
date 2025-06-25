// import React, { useState } from 'react';
// import { useLoginMutation } from '../../redux/api/loginApi';
// import { Link } from 'react-router-dom';
// import './loginPage.css';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const [input, setInput] = useState({ email: "", password: "" });
//   const [login, { isLoading, isError, error, data }] = useLoginMutation();
//   const navigate = useNavigate();

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setInput((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmitEvent = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await login(input).unwrap();
//       console.log("Login Success:", res);
//       setInput({ email: "", password: "" });
//       navigate('/home');
//     } catch (err) {
//       console.error("Login failed:", err);
//     }
//   };

//   return (
//     <div className='auth'>
//       <form onSubmit={handleSubmitEvent}>
//         <div className='form_control'>
//           <h1>Login Page</h1>
//         </div>

//         <div className="form_control">
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Email"
//             value={input.email}
//             onChange={handleInput}
//             required
//             autoComplete="email"
//           />
//         </div>

//         <div className="form_control">
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter Password"
//             value={input.password}
//             onChange={handleInput}
//             required
//             autoComplete="current-password"
//           />
//         </div>

//         <button className="btn-submit" disabled={isLoading}>
//           {isLoading ? "Logging in..." : "Login"}
//         </button>

//         <p>Don't have an account? <Link to="/register">Sign up</Link></p>

//         {isError && (
//           <p style={{ color: "red" }}>Login failed: {error?.data?.message || "Unknown error"}</p>
//         )}
//         {data && (
//           <p style={{ color: "green" }}>Welcome, {data.name || "User"}!</p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState, useEffect } from 'react';
import { useLoginMutation } from '../../redux/api/loginApi';
import { Link, useNavigate } from 'react-router-dom';
import './loginPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../redux/authSlice';

const LoginPage = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [login, { isLoading, isError, error, data }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    try {
      const res = await login(input).unwrap();
      console.log("Login Success:", res);
      dispatch(setToken(res));
      setInput({ email: "", password: "" });
      navigate('/home');
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className='auth'>
      <form onSubmit={handleSubmitEvent}>
        <div className='form_control'>
          <h1>Login Page</h1>
        </div>

        <div className="form_control">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={input.email}
            onChange={handleInput}
            required
            autoComplete="email"
          />
        </div>

        <div className="form_control">
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={input.password}
            onChange={handleInput}
            required
            autoComplete="current-password"
          />
        </div>

        <button className="btn-submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <p>Don't have an account? <Link to="/register">Sign up</Link></p>

        {isError && (
          <p style={{ color: "red" }}>Login failed: {error?.data?.message || "Unknown error"}</p>
        )}
        {data && (
          <p style={{ color: "green" }}>Welcome, {data.name || "User"}!</p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;

// import React, { useState } from 'react';
// import { useLoginMutation } from '../../redux/api/loginApi';
// import { Link } from 'react-router-dom';
// import './loginPage.css';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setToken } from '../../redux/authSlice';

// const LoginPage = () => {
//   const [input, setInput] = useState({ email: "", password: "" });
//   const [login, { isLoading, isError, error, data }] = useLoginMutation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setInput((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmitEvent = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await login(input).unwrap();
//       console.log("Login Success:", res);
//       dispatch(setToken(res));
//       setInput({ email: "", password: "" });
//       navigate('/home');
//     } catch (err) {
//       console.error("Login failed:", err);
//     }
//   };

//   return (
//     <div className='auth'>
//       <form onSubmit={handleSubmitEvent}>
//         <div className='form_control'>
//           <h1>Login Page</h1>
//         </div>

//         <div className="form_control">
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Email"
//             value={input.email}
//             onChange={handleInput}
//             required
//             autoComplete="email"
//           />
//         </div>

//         <div className="form_control">
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter Password"
//             value={input.password}
//             onChange={handleInput}
//             required
//             autoComplete="current-password"
//           />
//         </div>

//         <button className="btn-submit" disabled={isLoading}>
//           {isLoading ? "Logging in..." : "Login"}
//         </button>

//         <p>Don't have an account? <Link to="/register">Sign up</Link></p>

//         {isError && (
//           <p style={{ color: "red" }}>Login failed: {error?.data?.message || "Unknown error"}</p>
//         )}
//         {data && (
//           <p style={{ color: "green" }}>Welcome, {data.name || "User"}!</p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
