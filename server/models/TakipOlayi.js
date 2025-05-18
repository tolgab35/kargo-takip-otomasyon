import mongoose from "mongoose";

const takipOlayiSchema = new mongoose.Schema({
  gonderiId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gonderi",
    required: true,
  },
  tarih: { type: Date, default: Date.now },
  aciklama: String,
  konum: String,
});

export default mongoose.model("TakipOlayi", takipOlayiSchema);
