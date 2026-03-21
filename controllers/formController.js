const Form = require("../models/Form");

exports.createForm = async (req, res) => {
  try {
    const form = await Form.create(req.body);
    res.json(form);
  } catch (err) {

    // 🔥 Duplicate key error
    if (err.code === 11000) {
      const field = Object.keys(err.keyValue)[0];
      return res.status(400).json({
        message: `${field} already exists`,
      });
    }

    res.status(500).json({ message: "Server error" });
  }
};

exports.getForms = async (req, res) => {
  const { status } = req.query;
  const forms = await Form.find({ status });
  res.json(forms);
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const form = await Form.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );

  res.json(form);
};