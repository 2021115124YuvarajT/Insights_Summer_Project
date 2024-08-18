const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema({
    email: { type: String, required: true },
    doubts: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Discussion", discussionSchema);
