import Musteri from "../models/Musteri.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"; // ❗Eksik olan bu satır

export const login = async (req, res) => {
  const { email, sifre } = req.body;

  try {
    const musteri = await Musteri.findOne({ email });

    if (!musteri) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    // Şifre karşılaştır
    const sifreDogruMu = await bcrypt.compare(sifre, musteri.sifre);
    if (!sifreDogruMu) {
      return res.status(401).json({ message: "Şifre hatalı" });
    }

    // Token oluştur
    const token = jwt.sign(
      { id: musteri._id, rol: musteri.rol },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({ token, rol: musteri.rol });
  } catch (err) {
    console.error("Login sırasında hata:", err);
    res.status(500).json({ message: "Sunucu hatası" });
  }
};
