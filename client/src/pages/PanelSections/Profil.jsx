import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Profil.css";

const Profil = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:8000/api/musteri/profil", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error("Profil alınamadı", err);
        alert("Profil bilgileri getirilemedi.");
      });
  }, []);

  if (!data) return <p>Yükleniyor...</p>;

  return (
    <div className="profil-container">
      <h2>👤 Profil Bilgilerim</h2>
      <div className="profil-info">
        <div>
          <span className="profil-label">Ad Soyad:</span> {data.ad} {data.soyad}
        </div>
        <div>
          <span className="profil-label">Email:</span> {data.email}
        </div>
        <div>
          <span className="profil-label">Telefon:</span> {data.telefon}
        </div>
        <div>
          <span className="profil-label">Adres:</span> {data.adres}
        </div>
        <div>
          <span className="profil-label">Rol:</span> {data.rol}
        </div>
      </div>
    </div>
  );
};

export default Profil;
