import { useState } from "react";
import { useRegisterMutation } from "../../redux/api/loginApi";

const RegisterPage = () => {
  const [input, setInput] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    password: "",
    website: "",
    GST: "",
  });

  const [register, { isLoading, isError, error, data }] = useRegisterMutation();

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    try {
      const res = await register(input).unwrap();
      console.log("Register Success:", res);
      // setInput({
      //   name: "",
      //   address: "",
      //   email: "",
      //   phone: "",
      //   password: "",
      //   website: "",
      //   GST: "",
      // });
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmitEvent}>
      <input type="text" name="name" placeholder="Name" value={input.name} onChange={handleInput} required />
      <input type="text" name="address" placeholder="Address" value={input.address} onChange={handleInput} required />
      <input type="email" name="email" placeholder="Email" value={input.email} onChange={handleInput} required />
      <input type="text" name="phone" placeholder="Phone" value={input.phone} onChange={handleInput} required />
      <input type="password" name="password" placeholder="Password" value={input.password} onChange={handleInput} required />
      <input type="text" name="website" placeholder="Website" value={input.website} onChange={handleInput} />
      <input type="text" name="GST" placeholder="GST" value={input.GST} onChange={handleInput} />

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Registering..." : "Register"}
      </button>

      {isError && (
        <p style={{ color: "red" }}>
          Registration failed: {error?.data?.message}
        </p>
      )}
      {data && (
        <p style={{ color: "green" }}>
          Welcome, {data.name || "User"}! Registration successful.
        </p>
      )}
    </form>
  );
};

export default RegisterPage;

// import { useState } from "react";

// const RegisterPage = () => {
//     const [input, setInput] = useState({ name: "", address: "", email: "", phone: "", password: "", website: "", GST: "", });

//     const handleSubmitEvent = (e) => {
//         e.preventDefault();
//         const { name, address, email, phone, password, website, GST } = input;

//         if ( name && address && email && phone && password && website && GST ) {
//             console.log("Register Success", input);
//             setInput({
//                 name: "",
//                 address: "",
//                 email: "",
//                 phone: "",
//                 password: "",
//                 website: "",
//                 GST: "",
//             });
//         } else {
//             console.log("Register Error");
//         }
//     };

//     const handleInput = (e) => {
//         const { name, value } = e.target;
//         setInput((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     return (
//         <form onSubmit={handleSubmitEvent}>
//             <div className="form_control">
//                 <input type="text" name="name" placeholder="Enter Name" onChange={handleInput} value={input.name} />
//             </div>

//             <div className="form_control">
//                 <input type="email" name="email" placeholder="Enter Email" onChange={handleInput} value={input.email} />
//             </div>

//             <div className="form_control">
//                 <input type="text" name="address" placeholder="Enter Address" onChange={handleInput} value={input.address} />
//             </div>

//             <div className="form_control">
//                 <input type="tel" name="phone" placeholder="Enter Phone" onChange={handleInput} value={input.phone} />
//             </div>

//             <div className="form_control">
//                 <input type="password" name="password" placeholder="Enter Password" onChange={handleInput} value={input.password} />
//             </div>

//             <div className="form_control">
//                 <input type="text" name="GST" placeholder="Enter GST" onChange={handleInput} value={input.GST} />
//             </div>

//             <div className="form_control">
//                 <input type="url" name="website" placeholder="Enter Website" onChange={handleInput} value={input.website} />
//             </div>

//             <button className="btn-submit">Register</button>
//         </form>
//     );
// };

// export default RegisterPage;
