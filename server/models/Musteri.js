import mongoose from "mongoose";

const musteriSchema = new mongoose.Schema(
  {
    ad: {
      type: String,
      required: true,
    },
    soyad: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    telefon: {
      type: String,
      required: true,
      unique: true,
    },
    adres: {
      type: String,
      required: true,
    },
    sifre: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      enum: ["musteri", "admin", "subeCalisani"],
      default: "musteri",
    },
  },
  { timestamps: true }
);

// 🔍 Eşsiz index tanımı (görünür olması için ayrıca belirtiliyor)
musteriSchema.index({ email: 1 }, { unique: true });
musteriSchema.index({ telefon: 1 }, { unique: true });

export default mongoose.model("Musteri", musteriSchema);
