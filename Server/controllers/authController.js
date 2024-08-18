const authService = require("../services/authService");

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await authService.authenticateUser(email, password);
        req.session.isAuth = true;
        res.json({ success: true, name:user.name,age: user.age, contact: user.contact, inst_name: user.inst_name });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const signup = async (req, res) => {
    try {
        await authService.registerUser(req.body);
        res.json("notexist");
    } catch (error) {
        res.json("exist");
    }
};

const logout = (req, res) => {
    req.session.isAuth = false;
    res.json({ success: true });
};

module.exports = {
    login,
    signup,
    logout,
};
