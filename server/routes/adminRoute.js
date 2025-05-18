import express from "express";
import Gonderi from "../models/Gonderi.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

// Tüm gönderileri getir (sadece admin için)
router.get("/gonderiler", verifyToken, async (req, res) => {
  if (req.kullanici.rol !== "admin") {
    return res.status(403).json({ message: "Yetkisiz erişim" });
  }

  try {
    const gonderiler = await Gonderi.find().populate("musteriId");
    res.json(gonderiler);
  } catch (err) {
    res.status(500).json({ message: "Gönderiler getirilemedi" });
  }
});

// Gönderi durumu güncelle
router.patch("/gonderi/:id", verifyToken, async (req, res) => {
  if (req.kullanici.rol !== "admin") {
    return res.status(403).json({ message: "Yetkisiz erişim" });
  }

  try {
    const updated = await Gonderi.findByIdAndUpdate(
      req.params.id,
      { durum: req.body.durum },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Güncelleme başarısız" });
  }
});

export default router;
