import { useState } from "react";

const RegisterPage = () => {
    const [input, setInput] = useState({ name: "", address: "", email: "", phone: "", password: "", website: "", GST: "", });

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        const { name, address, email, phone, password, website, GST } = input;

        if ( name && address && email && phone && password && website && GST ) {
            console.log("Register Success", input);
            setInput({
                name: "",
                address: "",
                email: "",
                phone: "",
                password: "",
                website: "",
                GST: "",
            });
        } else {
            console.log("Register Error");
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
                <input type="text" name="name" placeholder="Enter Name" onChange={handleInput} value={input.name} />
            </div>

            <div className="form_control">
                <input type="email" name="email" placeholder="Enter Email" onChange={handleInput} value={input.email} />
            </div>

            <div className="form_control">
                <input type="text" name="address" placeholder="Enter Address" onChange={handleInput} value={input.address} />
            </div>

            <div className="form_control">
                <input type="tel" name="phone" placeholder="Enter Phone" onChange={handleInput} value={input.phone} />
            </div>

            <div className="form_control">
                <input type="password" name="password" placeholder="Enter Password" onChange={handleInput} value={input.password} />
            </div>

            <div className="form_control">
                <input type="text" name="GST" placeholder="Enter GST" onChange={handleInput} value={input.GST} />
            </div>

            <div className="form_control">
                <input type="url" name="website" placeholder="Enter Website" onChange={handleInput} value={input.website} />
            </div>

            <button className="btn-submit">Register</button>
        </form>
    );

    // const [registerApi, { isLoading, error }] = useRegisterMutation();

    // const [form, setForm] = useState({
    //     name: "",
    //     address: "",
    //     email: "",
    //     phone: "",
    //     password: "",
    //     website: "",
    //     GST: "",
    //     terms: false,
    // });

    // const handleChange = (e) => {
    //     setForm({ ...form, [e.target.name]: e.target.value });
    // };

    // const handleRegister = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await registerApi(form);
    //         console.log("Register Success:", response);
    //     } catch (err) {
    //         console.error("Register error:", err);
    //     }
    // };

    // return (
    //     <form onSubmit={handleRegister}>
    //         <input name="name" placeholder="First Name" value={form.name} onChange={handleChange} />
    //         <input name="address" placeholder="Last Name" value={form.address} onChange={handleChange} />
    //         <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
    //         <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
    //         <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
    //         <input name="website" placeholder="website" value={form.website} onChange={handleChange} />
    //         <input name="GST" placeholder="GST" value={form.GST} onChange={handleChange} />

    //         <button type="submit" disabled={isLoading}>Register</button>
    //         {error && <p style={{ color: "red" }}>Registration failed</p>}
    //     </form>
    // );
};

export default RegisterPage;

