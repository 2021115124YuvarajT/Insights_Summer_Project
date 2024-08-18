const bcrypt = require("bcrypt");
const User = require("../models/User");

const authenticateUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found. Please sign up first.");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid email or password.");
    }

    return user;
};

const registerUser = async (data) => {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
        throw new Error("User already exists.");
    }

    // The password will be hashed automatically due to the pre-save hook in the User model.
    const user = new User(data);
    await user.save();
};

module.exports = {
    authenticateUser,
    registerUser,
};
