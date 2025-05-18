import React, { useState } from "react";
import axios from "axios";
import "../styles/Register.css";

const Register = () => {
  const [form, setForm] = useState({
    ad: "",
    soyad: "",
    email: "",
    sifre: "",
    telefon: "",
    adres: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/musteri/ekle", form);
      alert("✅ Kayıt başarılı! Giriş yapabilirsiniz.");
      window.location.href = "/login";
    } catch (err) {
      console.error(err);
      alert(
        "Kayıt başarısız: " + err.response?.data?.hata || "Bilinmeyen hata"
      );
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2>📝 Kayıt Ol</h2>
        <form onSubmit={handleSubmit}>
          <input name="ad" placeholder="Ad" onChange={handleChange} required />
          <input
            name="soyad"
            placeholder="Soyad"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            name="sifre"
            type="password"
            placeholder="Şifre"
            onChange={handleChange}
            required
          />
          <input
            name="telefon"
            placeholder="Telefon"
            onChange={handleChange}
            required
          />
          <input
            name="adres"
            placeholder="Adres"
            onChange={handleChange}
            required
          />
          <button type="submit">Kayıt Ol</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
