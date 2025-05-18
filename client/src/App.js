import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profil from "./pages/PanelSections/Profil";
import Panel from "./pages/Panel";
import GonderiOlustur from "./pages/PanelSections/GonderiOlustur";
import GonderiListesi from "./pages/PanelSections/GonderiListesi";
import AdminPanel from "./pages/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        <Route
          path="/panel"
          element={
            <ProtectedRoute allowedRoles={["musteri"]} element={<Panel />} />
          }
        />
        <Route path="/panel/gonderi" element={<GonderiOlustur />} />
        <Route path="/panel/gonderiler" element={<GonderiListesi />} />;
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]} element={<AdminPanel />} />
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
