const feedbackService = require("../services/feedbackService");

const submitFeedback = async (req, res) => {
    try {
        await feedbackService.submitFeedback(req.body);
        res.json("done");
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Feedback submission failed." });
    }
};

module.exports = {
    submitFeedback,
};
