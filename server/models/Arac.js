import mongoose from "mongoose";

const aracSchema = new mongoose.Schema({
  plaka: { type: String, unique: true },
  kapasite: Number,
  subeId: { type: mongoose.Schema.Types.ObjectId, ref: "Sube" },
});

export default mongoose.model("Arac", aracSchema);
