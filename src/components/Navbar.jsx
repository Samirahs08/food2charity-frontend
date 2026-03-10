import React from "react";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      backgroundColor: "#2c3e50",
      color: "white"
    }}>
      
      <h2>Food2Charity</h2>

      <div>
        <a href="/" style={{marginRight:"15px", color:"white"}}>Home</a>
        <a href="/login" style={{marginRight:"15px", color:"white"}}>Login</a>
        <a href="/register" style={{color:"white"}}>Register</a>
      </div>

    </nav>
  );
}

export default Navbar;