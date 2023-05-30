import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // Update the path based on the location of your firebase.js file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");

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

  const handleSignup = () => {
    if (password.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    }

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

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className="container">
      <h2>{isSignup ? "Signup" : "Login"}</h2>
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
        <button type="button" className="btn btn-primary" onClick={isSignup ? handleSignup : handleLogin}>
          {isSignup ? "Signup" : "Login"}
        </button>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button type="button" className="btn btn-link" onClick={toggleForm}>
            {isSignup ? "Login instead" : "Signup instead"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
