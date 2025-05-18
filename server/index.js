import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import musteriRoute from "./routes/musteriRoute.js";
import gonderiRoute from "./routes/gonderiRoute.js";
import adminRoute from "./routes/adminRoute.js";
import subeRoute from "./routes/subeRoute.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Veritabanı bağlantısı
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB bağlantısı başarılı"))
  .catch((err) => console.log("MongoDB bağlantı hatası:", err));

// Rotalar
app.use("/api/musteri", musteriRoute);
app.use("/api/gonderi", gonderiRoute);
app.use("/api/admin", adminRoute);
app.use("/api/sube", subeRoute);

// Sunucu
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
