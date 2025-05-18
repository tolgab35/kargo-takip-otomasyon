import React, { useState } from "react";
import "../styles/Login.css";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", sifre: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/musteri/login",
        form
      );
      const { token, rol } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("rol", rol);

      alert("Giriş başarılı!");
      if (rol === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/panel";
      }
    } catch (err) {
      alert("Giriş başarısız: " + (err.response?.data?.message || "Hata"));
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Giriş Yap</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="sifre"
            placeholder="Şifre"
            onChange={handleChange}
            required
          />
          <button type="submit">Giriş</button>
        </form>
        <p style={{ marginTop: "14px", fontSize: "14px" }}>
          Hesabın yok mu?{" "}
          <a href="/register" style={{ color: "#e65100", fontWeight: "bold" }}>
            Kayıt Ol
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
