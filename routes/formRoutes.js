const router = require("express").Router();
const {
  createForm,
  getForms,
  updateStatus,
} = require("../controllers/formController");

const protect = require("../middleware/authMiddleware");

// Public (user form submit)
router.post("/", createForm);

// Protected (admin only)
router.get("/", protect, getForms);
router.put("/:id", protect, updateStatus);

module.exports = router;
