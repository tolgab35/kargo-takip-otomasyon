import express from "express";
import Musteri from "../models/Musteri.js";
import { login } from "../controllers/loginController.js";
import bcrypt from "bcryptjs";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

// Yeni müşteri ekleme
router.post("/ekle", async (req, res) => {
  try {
    const { ad, soyad, email, telefon, adres, sifre } = req.body;

    // Email veya telefon daha önce kullanılmış mı?
    const mevcutMusteri = await Musteri.findOne({
      $or: [{ email }, { telefon }],
    });
    if (mevcutMusteri) {
      return res
        .status(400)
        .json({ hata: "Email veya telefon zaten kayıtlı." });
    }

    // Şifre hashle
    const hashlenmisSifre = await bcrypt.hash(sifre, 10);

    // Yeni kullanıcı oluştur
    const yeniMusteri = new Musteri({
      ad,
      soyad,
      email,
      telefon,
      adres,
      sifre: hashlenmisSifre,
    });

    const kayit = await yeniMusteri.save();
    res.status(201).json({ mesaj: "Kayıt başarılı", musteri: kayit });

    console.log("Gelen şifre:", sifre);
    console.log("Hashlenmiş şifre:", hashlenmisSifre);
  } catch (error) {
    console.error("Kayıt hatası:", error);
    res.status(400).json({ hata: error.message });
  }
});

// Müşteri girişi
router.post("/login", login);

// Korumalı test endpoint
router.get("/profil", verifyToken, async (req, res) => {
  try {
    const musteri = await Musteri.findById(req.kullanici.id).select("-sifre");
    if (!musteri) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }
    res.json(musteri);
  } catch (error) {
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

export default router;
