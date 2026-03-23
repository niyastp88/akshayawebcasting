const Form = require("../models/Form");

exports.createForm = async (req, res) => {
  try {
    const form = await Form.create(req.body);

    return res.status(201).json({
      success: true,
      data: form,
    });

  } catch (err) {

    // 🔥 Duplicate error
    if (err.code === 11000) {
      const field = Object.keys(err.keyValue)[0];

      return res.status(400).json({
        success: false,
        message: `${field} already exists`,
      });
    }

    // 🔥 Validation error (mongoose)
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors)[0].message;

      return res.status(400).json({
        success: false,
        message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.getForms = async (req, res) => {
  try {
    const { status } = req.query;

    const forms = await Form.find({ status });

    return res.status(200).json({
      success: true,
      data: forms,
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const form = await Form.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!form) {
      return res.status(404).json({
        success: false,
        message: "Form not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: form,
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};