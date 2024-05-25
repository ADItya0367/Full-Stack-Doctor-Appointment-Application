import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}>
        <Route path="register" element={<Register/>} />
        
      </Route>
    </Routes>
  </BrowserRouter>
  );
} 

export default App;
