const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    uppercase: true,
  },

  mobile: {
    type: String,
    required: [true, "Mobile number is required"],
    unique: true,
    match: [/^\d{10}$/, "Mobile number must be 10 digits"],
    trim: true,
  },

  whatsapp: {
    type: String,
    required: [true, "Whatsapp number is required"],
    unique: true,
    match: [/^\d{10}$/, "Whatsapp number must be 10 digits"],
    trim: true,
  },

  aadhar: {
    type: String,
    required: [true, "Aadhar number is required"],
    unique: true,
    match: [/^\d{12}$/, "Aadhar must be 12 digits"],
    trim: true,
  },

  electionId: {
    type: String,
    required: [true, "Election ID is required"],
    unique: true,
    trim: true,
    uppercase: true, // 🔥 auto uppercase
  },

  panchayat: {
    type: String,
    required: [true, "Panchayat is required"],
    trim: true,
    uppercase: true,
  },

  address: {
    type: String,
    required: [true, "Address is required"],
    trim: true,
    uppercase: true,
  },

  pincode: {
    type: String,
    required: [true, "Pincode is required"],
    match: [/^\d{6,7}$/, "Pincode must be 6 or 7 digits"],
    trim: true,
  },

  pollingStation: {
    type: String,
    trim: true,
    uppercase: true,
  },

  laptop: {
    type: String,
    required: true,
    enum: ["Yes", "No"],
  },

  webcam: {
    type: String,
    required: true,
    enum: ["Yes", "No"],
  },

  status: {
    type: String,
    enum: ["pending", "selected", "rejected"],
    default: "pending",
  },
}, { timestamps: true });

module.exports = mongoose.model("Form", formSchema);