import React, { useState, useEffect } from 'react';
import { useLoginMutation } from '../../redux/api/loginApi';
import { Link, useNavigate } from 'react-router-dom';
import './loginPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../redux/authSlice';
import 'font-awesome/css/font-awesome.min.css';

const LoginPage = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading, isError, error }] = useLoginMutation();
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
    <div className='container'>
      <form onSubmit={handleSubmitEvent}>
        <div className='form_control'>
          <h1>Login</h1>
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
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            value={input.password}
            onChange={handleInput}
            required
            autoComplete="current-password"
          />
          <span 
            className="eye-icon" 
            onClick={() => setShowPassword(!showPassword)} 
            role="button"
          >
            {showPassword ? (
                  <i className="fa fa-eye-slash"></i>
                ) : (
                  <i className="fa fa-eye"></i>
                )}
          </span>
        </div>

        <button className="btn-submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <p>Don't have an account? <Link to="/register">Sign up</Link></p>

        {isError && (
          <p className="error-message">Login failed: {error?.data?.message || "Unknown error"}</p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
