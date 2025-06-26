import { useState, useEffect } from "react";
import { useRegisterMutation } from "../../redux/api/loginApi";
import './registerPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RegisterPage = () => {
  const [input, setInput] = useState({ name: "", address: "", email: "", phone: "", password: "", website: "", GST: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [register, { isLoading, isError, error, data }] = useRegisterMutation();
  const navigate = useNavigate();
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
      const res = await register(input).unwrap();
      console.log("Register Success:", res);
      setInput({ name: "", address: "", email: "", phone: "", password: "", website: "", GST: "" });
      navigate("/");
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmitEvent}>
        <div className="form_control">
          <h1>Register</h1>
        </div>

        <div className="form_control">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={input.name}
            onChange={handleInput}
            required
          />
        </div>

        <div className="form_control">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={input.address}
            onChange={handleInput}
            required
          />
        </div>

        <div className="form_control">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={input.email}
            onChange={handleInput}
            required
          />
        </div>

        <div className="form_control">
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={input.phone}
            onChange={handleInput}
            required
          />
        </div>

        <div className="form_control">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={handleInput}
            required
          />
          <span
            className="eye-icon"
            onClick={togglePasswordVisibility}
            role="button"
            aria-label={showPassword ? "Hide Password" : "Show Password"}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <div className="form_control">
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={input.website}
            onChange={handleInput}
          />
        </div>

        <div className="form_control">
          <input
            type="text"
            name="GST"
            placeholder="GST"
            value={input.GST}
            onChange={handleInput}
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Registering..." : "Register"}
        </button>

        <p>Already have an account? <Link to="/">Sign in</Link></p>

        {isError && (
          <p style={{ color: "red" }}>
            Registration failed: {error?.data?.message || "Unknown error"}
          </p>
        )}
        {data && (
          <p style={{ color: "green" }}>Registration successful!</p>
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
