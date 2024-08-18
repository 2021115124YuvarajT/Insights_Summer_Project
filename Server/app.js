const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoDBSession = require("connect-mongodb-session")(session);
const connectDB = require("./config/dbConfig");

const authRoutes = require("./routes/authRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const discussionRoutes = require("./routes/discussionRoutes");

const app = express();

connectDB();

const store = new MongoDBSession({
    uri: "mongodb://127.0.0.1:27017/sessions",
    collection: "mySessions"
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
        origin: 'http://localhost:3000', // Replace with your frontend's URL
        credentials: true
    }
));
app.use(cookieParser());
app.use(session({
    secret: "Key that will sign the key",
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
    },
    httpOnly: true, // Make sure cookies are not accessible via JavaScript
    secure: false, // Set to true if using HTTPS
}));
app.get("/", cors(), (req, res) => { });
app.use("/auth", authRoutes);

app.use("/api", feedbackRoutes);
app.use("/api", discussionRoutes);

app.listen(8000, () => {
    console.log("Server connected on port 8000");
});
