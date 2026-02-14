const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const auth = require("../middleware/auth");
const { createComplaint } = require("../controllers/complaintController");

router.post("/", auth, upload.single("media"), createComplaint);

module.exports = router;
