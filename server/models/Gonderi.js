import mongoose from "mongoose";

const gonderiSchema = new mongoose.Schema({
  musteriId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Musteri",
    required: true,
  },
  aliciAd: String,
  aliciAdres: String,
  subeId: { type: mongoose.Schema.Types.ObjectId, ref: "Sube" },
  durum: {
    type: String,
    enum: ["hazırlanıyor", "taşınıyor", "teslim edildi"],
    default: "hazırlanıyor",
  },
  createdAt: { type: Date, default: Date.now },
});

gonderiSchema.post("save", function (doc) {
  console.log("📦 Yeni gönderi kaydedildi:", doc._id);
});

export default mongoose.model("Gonderi", gonderiSchema);
