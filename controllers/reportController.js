const Report = require("../models/Report");

// 🔹 Create Report
exports.createReport = async (req, res) => {
  try {
    const { title, description, location } = req.body;

    const report = await Report.create({
      title,
      description,
      location,
      createdBy: req.user.id,
    });

    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Get All Reports
exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find().populate("createdBy", "email");
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Upvote Report
exports.upvoteReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    report.upvotes += 1;
    await report.save();

    res.json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Approve Report (Admin)
exports.approveReport = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }

    const report = await Report.findById(req.params.id);

    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    report.status = "approved";
    await report.save();

    res.json({ message: "Report approved" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
