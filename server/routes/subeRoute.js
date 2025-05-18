import express from "express";
import Sube from "../models/Sube.js";

const router = express.Router();

// ✅ Şube ekleme (isteğe bağlı test için)
router.post("/ekle", async (req, res) => {
  try {
    const yeniSube = new Sube(req.body);
    const kayit = await yeniSube.save();
    res.status(201).json(kayit);
  } catch (err) {
    res.status(400).json({ hata: err.message });
  }
});

// ✅ Tüm şubeleri getir
router.get("/", async (req, res) => {
  try {
    const subeler = await Sube.find();
    res.json(subeler);
  } catch (err) {
    res.status(500).json({ hata: err.message });
  }
});

export default router;
