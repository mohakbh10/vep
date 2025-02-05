import React from "react";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp";
import Dasboard from "./pages/Dashboard";

import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dasboard />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App
