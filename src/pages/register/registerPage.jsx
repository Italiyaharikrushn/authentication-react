import { useState } from "react";
import { useRegisterMutation } from "../../redux/api/loginApi";
import './registerPage.css';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [input, setInput] = useState({ name: "", address: "", email: "", phone: "", password: "", website: "", GST: "", });
  const [register, { isLoading, isError, error, data }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    try {
      const res = await register(input).unwrap();
      console.log("Register Success:", res);
      setInput({ name: "", address: "", email: "", phone: "", password: "", website: "", GST: "", });
      navigate("/");
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <div className="auth">
      <form onSubmit={handleSubmitEvent}>
        <div className="form_control">
          <h1>Regiaster page</h1>
        </div>
        <div className="form_control">
          <input type="text" name="name" placeholder="Name" value={input.name} onChange={handleInput} required />
        </div>

        <div className="form_control">
          <input type="text" name="address" placeholder="Address" value={input.address} onChange={handleInput} required />
        </div>

        <div className="form_control">
          <input type="email" name="email" placeholder="Email" value={input.email} onChange={handleInput} required />
        </div>

        <div className="form_control">
          <input type="text" name="phone" placeholder="Phone" value={input.phone} onChange={handleInput} required />
        </div>

        <div className="form_control">
          <input type="password" name="password" placeholder="Password" value={input.password} onChange={handleInput} required />
        </div>
        <div className="form_control">
          <input type="text" name="website" placeholder="Website" value={input.website} onChange={handleInput} />
        </div>
        <div className="form_control">
          <input type="text" name="GST" placeholder="GST" value={input.GST} onChange={handleInput} />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Registering..." : "Register"}
        </button>

        <p>Already have an account? <Link to="/">Sign in</Link></p>

        {isError && (
          <p style={{ color: "red" }}>
            Registration failed: {error?.data?.message}
          </p>
        )}
        {data && (
          <p style={{ color: "green" }}>
            Registration successful.
          </p>
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
