const express = require("express");
const discussionController = require("../controllers/discussionController");

const router = express.Router();

router.post("/discussion", discussionController.addDiscussion);
router.get("/discussion", discussionController.getAllDiscussions);

module.exports = router;
