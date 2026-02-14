const express = require("express");
const router = express.Router();

const {
  createReport,
  getReports,
  upvoteReport,
  approveReport,
} = require("../controllers/reportController");

const authMiddleware = require("../middleware/authMiddleware");


// 🔹 Create Report (Protected)
router.post("/", authMiddleware, createReport);

// 🔹 Get All Reports (Public)
router.get("/", getReports);

// 🔹 Upvote Report (Protected)
router.put("/:id/upvote", authMiddleware, upvoteReport);

// 🔹 Approve Report (Admin Only)
router.put("/:id/approve", authMiddleware, approveReport);

module.exports = router;
