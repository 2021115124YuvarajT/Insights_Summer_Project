const express = require("express");
const feedbackController = require("../controllers/feedbackController");

const router = express.Router();

router.post("/feedback", feedbackController.submitFeedback);

module.exports = router;
