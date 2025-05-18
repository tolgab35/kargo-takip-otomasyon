import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/GonderiOlustur.css";

const GonderiOlustur = () => {
  const [form, setForm] = useState({
    aliciAd: "",
    aliciAdres: "",
    subeId: "",
  });
  const [subeler, setSubeler] = useState([]);

  // Şubeleri çek
  useEffect(() => {
    axios.get("http://localhost:8000/api/sube").then((res) => {
      setSubeler(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:8000/api/gonderi/ekle", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("📦 Gönderi başarıyla eklendi.");
      setForm({ aliciAd: "", aliciAdres: "", subeId: "" });
    } catch (err) {
      console.error(err);
      alert("Hata: Gönderi eklenemedi.");
    }
  };

  return (
    <div className="gonderi-form-container">
      <h2>📦 Yeni Gönderi Oluştur</h2>
      <form className="gonderi-form" onSubmit={handleSubmit}>
        <input
          name="aliciAd"
          placeholder="Alıcı Adı"
          value={form.aliciAd}
          onChange={handleChange}
          required
        />
        <input
          name="aliciAdres"
          placeholder="Alıcı Adresi"
          value={form.aliciAdres}
          onChange={handleChange}
          required
        />
        <select
          name="subeId"
          value={form.subeId}
          onChange={handleChange}
          required
        >
          <option value="">🚚 Şube Seçin</option>
          {subeler.map((sube) => (
            <option key={sube._id} value={sube._id}>
              {sube.ad} - {sube.sehir}
            </option>
          ))}
        </select>
        <button type="submit">Gönderiyi Kaydet</button>
      </form>
    </div>
  );
};

export default GonderiOlustur;
