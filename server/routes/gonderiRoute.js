import express from "express";
import Gonderi from "../models/Gonderi.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/ekle", verifyToken, async (req, res) => {
  try {
    const yeniGonderi = new Gonderi({
      musteriId: req.kullanici.id,
      aliciAd: req.body.aliciAd,
      aliciAdres: req.body.aliciAdres,
    });

    const kayit = await yeniGonderi.save();
    res.status(201).json(kayit);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gönderi eklenemedi" });
  }
});

router.get("/benim", verifyToken, async (req, res) => {
  try {
    const gonderiler = await Gonderi.find({ musteriId: req.kullanici.id });
    res.json(gonderiler);
  } catch (err) {
    res.status(500).json({ message: "Veriler alınamadı" });
  }
});

export default router;
