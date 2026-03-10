import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DonorDashboard from "./pages/DonorDashboard";
import NgoDashboard from "./pages/NgoDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AddDonation from "./pages/AddDonation";

function App(){
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/add-donation" element={<AddDonation />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
<Route path="/ngo-dashboard" element={<NgoDashboard />} />
<Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;