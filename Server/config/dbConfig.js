const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/react-login");
        console.log("MongoDB connected");
    } catch (error) {
        console.log("Failed to connect to MongoDB", error);
    }
};

module.exports = connectDB;
