import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/users/sign_in', {
        user: { email, password },
      });
      // Handle successful login
      console.log(response.data);
    } catch (error) {
      // Handle login error
      console.error(error);
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
};

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/users', {
        user: { email, password },
      });
      // Handle successful registration
      console.log(response.data);
    } catch (error) {
      // Handle registration error
      console.error(error);
      setErrorMessage('Registration failed');
    }
  };

  return (
    <form onSubmit={handleRegistration}>
      <h2>Registration</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password.length < 6 && <div className="alert alert-danger">Password should be at least 6 characters long</div>}
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="container">
      {showLogin ? (
        <>
          <LoginForm />
          <p>Don't have an account? <button className="btn btn-link" onClick={() => setShowLogin(false)}>Sign up</button></p>
        </>
      ) : (
        <>
          <RegistrationForm />
          <p>Already have an account? <button className="btn btn-link" onClick={() => setShowLogin(true)}>Log in</button></p>
        </>
      )}
    </div>
  );
};

export default Auth;
