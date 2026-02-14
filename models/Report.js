const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    location: String,
    image: String,
    upvotes: { type: Number, default: 0 },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);
