import React from "react";
import "./Sidebar.css";

const Sidebar = ({ active, setActive }) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="sidebar">
      <div
        className={active === "profil" ? "active" : ""}
        onClick={() => setActive("profil")}
      >
        👤 Profilimi Görüntüle
      </div>
      <div
        className={active === "olustur" ? "active" : ""}
        onClick={() => setActive("olustur")}
      >
        ✉️ Yeni Gönderi Oluştur
      </div>
      <div
        className={active === "liste" ? "active" : ""}
        onClick={() => setActive("liste")}
      >
        📬 Gönderi Takip Durumu
      </div>

      <div className="logout" onClick={handleLogout}>
        🚪 Çıkış Yap
      </div>
    </div>
  );
};

export default Sidebar;
