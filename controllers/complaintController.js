const Complaint = require("../models/Complaint");

exports.createComplaint = async (req, res) => {
  try {
    const { description, issueType, latitude, longitude, address } = req.body;

    const complaint = await Complaint.create({
      user: req.user.id,
      media: req.file ? req.file.path : null,
      description,
      issueType,
      location: {
        latitude,
        longitude,
        address,
      },
    });

    res.json({ message: "Complaint submitted ✅", complaint });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
