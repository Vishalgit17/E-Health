import React, { useState } from 'react';
import '../css/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    axios.post("http://localhost:8080/user/login", user)
      .then(response => {
        console.log(response.data);
        setEmail('');
        setPassword('');
        navigate("/map")
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1 className="title">Welcome to the HealthCare App</h1>
      <div className="form-container">
        <h2 className="form-heading">Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>
      <p className="signup-text">Don't have an account?</p>
      <a href="/signup" className="signup-link">Sign Up</a>
    </div>
  );
};

export default Login;
