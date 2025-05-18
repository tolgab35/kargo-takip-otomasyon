import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminPanel.css";

const AdminPanel = () => {
  const [gonderiler, setGonderiler] = useState([]);
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/admin/gonderiler",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setGonderiler(res.data);
    } catch (err) {
      console.error("Gönderiler alınamadı:", err);
      alert("Admin gönderi listesi alınamadı.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDurumChange = async (id, yeniDurum) => {
    try {
      await axios.patch(
        `http://localhost:8000/api/admin/gonderi/${id}`,
        { durum: yeniDurum },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchData();
      alert("Durum başarıyla güncellendi");
    } catch (err) {
      console.error("Güncelleme hatası:", err);
      alert("Durum güncellenemedi.");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="admin-panel-container">
      <h2>📋 Gönderi Yönetim Paneli</h2>

      {gonderiler.length === 0 ? (
        <p>Hiç gönderi bulunamadı.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Alıcı</th>
              <th>Adres</th>
              <th>Müşteri</th>
              <th>Durum</th>
            </tr>
          </thead>
          <tbody>
            {gonderiler.map((g) => (
              <tr key={g._id}>
                <td>{g.aliciAd}</td>
                <td>{g.aliciAdres}</td>
                <td>
                  {g.musteriId?.ad} {g.musteriId?.soyad}
                </td>
                <td>
                  <select
                    value={g.durum}
                    onChange={(e) => handleDurumChange(g._id, e.target.value)}
                  >
                    <option value="hazırlanıyor">hazırlanıyor</option>
                    <option value="taşınıyor">taşınıyor</option>
                    <option value="teslim edildi">teslim edildi</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="admin-logout" onClick={handleLogout}>
        🚪 Çıkış Yap
      </div>
    </div>
  );
};

export default AdminPanel;
