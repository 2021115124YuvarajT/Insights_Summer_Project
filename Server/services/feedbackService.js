const Feedback = require("../models/Feedback");

const submitFeedback = async (data) => {
    await Feedback.create(data);
};

module.exports = {
    submitFeedback,
};
