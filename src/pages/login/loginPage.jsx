import React, { useState } from 'react';
import { useLoginMutation } from '../../redux/api/loginApi';

const LoginPage = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [login, { isLoading, isError, error, data }] = useLoginMutation();

  const handleSubmitEvent = (e) => {
    // const handleSubmitEvent = async (e) => {
    e.preventDefault();
    const { email, password } = input;
    if ( email && password ) {
      try {
        // const res = await login({ email, password }).unwrap();
        const res = login({ email, password }).unwrap();
        console.log("Login Success:", res);
        setInput({ email: "", password: "" });
      } catch (err) {
        console.error("Login failed:", err);
      }
    } else {
      console.log("Please fill all fields");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmitEvent}>
      <div className="form_control">
        <input type="email" name="email" placeholder="Enter Email" onChange={handleInput} value={input.email} />
      </div>

      <div className="form_control">
        <input type="password" name="password" placeholder="Enter Password" onChange={handleInput} value={input.password} />
      </div>

      <button className="btn-submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </button>
      {isError && <p style={{ color: "red" }}>Login failed: {error?.data?.message || "Unknown error"}</p>}
      {data && (<p style={{ color: "green" }}> Welcome, {data.name || "User"}! </p>)}
    </form>
  );
};

export default LoginPage;

// import React, { useState } from 'react';

// const LoginPage = () => {
//   const [input, setInput] = useState({ email: "", password: "" });

//   const handleSubmitEvent = (e) => {
//     e.preventDefault();
//     const { email, password } = input;
//     if ( email && password ) {
//       console.log("Login Success", input);
//       setInput({
//         email: "",
//         password: ""
//       });
//     } else {
//       console.log("Login Error");
//     }
//   };

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setInput((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <form onSubmit={handleSubmitEvent}>
//       <div className="form_control">
//         <input type="email" name="email" placeholder="Enter Email" onChange={handleInput} value={input.email} />
//       </div>

//       <div className="form_control">
//         <input type="password" name="password" placeholder="Enter Password" onChange={handleInput} value={input.password} />
//       </div>

//       <button className="btn-submit">Login</button>
//     </form>
//   );
// };

// export default LoginPage;
