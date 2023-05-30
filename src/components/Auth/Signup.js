import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // Update the path based on the location of your firebase.js file

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (password.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signup successful
        const user = userCredential.user;
        console.log("Signed up:", user);
      })
      .catch((error) => {
        // Signup error
        setError(error.message);
        console.log("Signup error:", error);
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful
        const user = userCredential.user;
        console.log("Logged in:", user);
      })
      .catch((error) => {
        // Login error
        setError(error.message);
        console.log("Login error:", error);
      });
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="text-danger">{error}</div>}
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSignup}>Signup</button>
      </form>

      <hr />

      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="login-email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="login-password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="text-danger">{error}</div>}
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Signup;
