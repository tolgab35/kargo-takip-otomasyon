import mongoose from "mongoose";

const subeSchema = new mongoose.Schema({
  ad: String,
  sehir: String,
});

export default mongoose.model("Sube", subeSchema);
