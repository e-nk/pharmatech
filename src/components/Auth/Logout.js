import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase"; // Update the path based on the location of your firebase.js file

const Logout = () => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Logout successful
        console.log("Logged out");
      })
      .catch((error) => {
        // Logout error
        console.log("Logout error:", error);
      });
  };

  return (
    <div className="container">
      <h2>Logout</h2>
      <button type="button" className="btn btn-primary" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
