const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },

  mobile: {
    type: String,
    required: true,
    unique: true,
  },

  whatsapp: {
    type: String,
    required: true,
    unique: true,
  },

  aadhar: {
    type: String,
    required: true,
    unique: true,
  },

  electionId: {
    type: String,
    required: true,
    unique: true,
  },

  panchayat: { type: String, required: true },
  address: { type: String, required: true },
  pincode: { type: String, required: true },
  pollingStation: { type: String, required: true },
  laptop: { type: String, required: true },
  webcam: { type: String, required: true },

  status: {
    type: String,
    enum: ["pending", "selected", "rejected"],
    default: "pending",
  },
}, { timestamps: true });

module.exports = mongoose.model("Form", formSchema);