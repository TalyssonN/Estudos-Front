import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/index/index";
import Login from "./home/login/login"; // ou './pages/Login' se estiver lá
import System from "./sistema/menu/system.js"; // ou './pages/Menu' se estiver lá


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/system" element={<System />} /> {/* ← ESSA é a rota que falta! */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
