const discussionService = require("../services/discussionService");

const addDiscussion = async (req, res) => {
    try {
        await discussionService.addDiscussion(req.body);
        res.json("done");
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Discussion submission failed." });
    }
};

const getAllDiscussions = async (req, res) => {
    try {
        const discussions = await discussionService.getAllDiscussions();
        res.json({ success: true, discussions });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch discussions" });
    }
};

module.exports = {
    addDiscussion,
    getAllDiscussions,
};
