import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ApplyDoctor from "./pages/ApplyDoctor";
import Appointments from "./pages/Appointments";
import Profiles from "./pages/Profiles";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/profiles" element={<Profiles />} />
      <Route path="/applyfordoctor" element={<ApplyDoctor />} />
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  </BrowserRouter>
  );
} 

export default App;
