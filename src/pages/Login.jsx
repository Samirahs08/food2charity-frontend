import React, { useState } from "react";

function Login(){

  const [role,setRole] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(role === "donor"){
      window.location.href="/donor-dashboard";
    }
    else if(role === "ngo"){
      window.location.href="/ngo-dashboard";
    }
    else if(role === "admin"){
      window.location.href="/admin-dashboard";
    }
  }

  return(

    <div style={{textAlign:"center", marginTop:"40px"}}>

      <h2>Login to Food2Charity</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <input 
          type="email"
          placeholder="Enter Email"
          required
          style={{margin:"10px",padding:"8px"}}
          />
        </div>

        <div>
          <input 
          type="password"
          placeholder="Enter Password"
          required
          style={{margin:"10px",padding:"8px"}}
          />
        </div>

        <div>
          <select 
          value={role}
          onChange={(e)=>setRole(e.target.value)}
          style={{margin:"10px",padding:"8px"}}
          required
          >
            <option value="">Select Role</option>
            <option value="donor">Donor</option>
            <option value="ngo">NGO</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" style={{padding:"10px"}}>
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;