import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/index";
import Login from "./home/login"; // ou './pages/Login' se estiver lá
import System from "./home/system";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/system" element={<System />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
