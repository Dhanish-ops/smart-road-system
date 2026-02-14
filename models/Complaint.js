const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  media: String,
  description: String,
  issueType: String,
  location: {
    latitude: Number,
    longitude: Number,
    address: String,
  },
  status: {
    type: String,
    default: "Pending",
  },
  upvotes: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

module.exports = mongoose.model("Complaint", complaintSchema);
