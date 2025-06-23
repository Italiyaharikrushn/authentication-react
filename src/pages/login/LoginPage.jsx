import React, { useState } from 'react';

const LoginPage = () => {
  const [input, setInput] = useState({ email: '', password: '' });

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    const { email, password } = input;
    if ( email && password ) {
      console.log("Login Success", input);
      setInput({
        email: "",
        password: ""
      });
    }
    else {
      console.log("Login Error");
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
        <input type="email" name="email" placeholder="Enter Email" onChange={handleInput} />
      </div>

      <div className="form_control">
        <input type="password" name="password" placeholder='Enter Password' onChange={handleInput} />
      </div>

      <button className="btn-submit">Login</button>
    </form>
  );

  // import { useLoginMutation } from '../../redux/api/loginApi';

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [login, { isLoading, error }] = useLoginMutation();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await login({ email, password });
  //     console.log('Login success:', response);
  //   } catch (err) {
  //     console.error('Login error:', err);
  //   }
  // };

  // return (
  //   <form onSubmit={handleLogin}>
  //     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
  //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
  //     <button type="submit" disabled={isLoading}>Login</button>
  //     {error && <p>{error.data?.message || 'Login failed'}</p>}
  //   </form>
  // );
};

export default LoginPage;
