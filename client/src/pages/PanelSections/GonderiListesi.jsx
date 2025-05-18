import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/GonderiListesi.css";

const GonderiListesi = () => {
  const [gonderiler, setGonderiler] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:8000/api/gonderi/benim", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setGonderiler(res.data))
      .catch((err) => {
        console.error("Listeleme hatası:", err);
        alert("Gönderiler alınamadı.");
      });
  }, []);

  if (!gonderiler.length)
    return <p style={{ textAlign: "center" }}>Hiç gönderiniz yok.</p>;

  return (
    <div className="gonderi-list-container">
      <h2>📬 Gönderilerim</h2>
      {gonderiler.map((g) => (
        <div key={g._id} className="gonderi-card">
          <div className="gonderi-icon">📦</div>
          <div className="gonderi-details">
            <strong>Alıcı:</strong> {g.aliciAd}
            <br />
            <strong>Adres:</strong> {g.aliciAdres}
            <br />
            <strong>Durum:</strong> {g.durum}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GonderiListesi;
