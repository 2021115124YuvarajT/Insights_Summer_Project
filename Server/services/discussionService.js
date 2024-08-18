const Discussion = require("../models/Discussion");

const addDiscussion = async (data) => {
    await Discussion.create(data);
};

const getAllDiscussions = async () => {
    return await Discussion.find();
};

module.exports = {
    addDiscussion,
    getAllDiscussions,
};
