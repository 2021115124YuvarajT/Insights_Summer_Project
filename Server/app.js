//implementing express framework for backend's enhancement
const express = require("express");
const { feedback,collection,discussion } = require("./mongo");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const session =require('express-session');
const mongoURI = "mongodb://127.0.0.1:27017/sessions"

const MongoDBSession = require('connect-mongodb-session')(session);
const store = new MongoDBSession({
  uri:mongoURI,
  collection:"mySessions"
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(session({
  secret:'Key that will sign the key',
  resave:false,
  saveUninitialized:false,
  store:store,
}))

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  req.session.isAuth = true;
  if(req.session.isAuth){
  const { email, password } = req.body;

  try {
    const user = await collection.findOne({ email: email });
    
    if (user && user.password === password)//checking equality without type checking 
    {  
      res.json({ success: true, name: user.name,email: user.email,age: user.age,contact: user.contact,inst_name: user.inst_name}); 
    } 
    else if(!user) {
      res.json({ success: false, message: "please sign up first" });
    }
    else{
      res.json({success:false,message:"User/password is wrong"});
    }
  } catch (e) {
    res.json({ success: false, message: "Login failed" });
    console.log(e);
  }
}
});

app.post("/feedback",async(req,res) =>{
  const {email,message} = req.body;
  const insertdata = {
    email:email,
    message:message
  }
  try{
    const check =  await feedback.insertMany([insertdata]);
    res.json("done");
  }
  catch(e){
    console.log(e);
  }
})

app.post("/discussion",async(req,res) =>{
  const {email,doubts} = req.body;
  const discuss_data = {
    email:email,
    doubts:doubts,
  }
  try{
    await discussion.insertMany([discuss_data]);
    res.json("done");
  }
  catch(e){
    console.log(e);
  }
})

app.get('/discussion', async (req, res) => {
  try {
    const discussions = await discussion.find();
    res.json({ success: true, discussions });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch discussions' });
  }
});
app.post("/signup", async (req, res) => {
  const { email, password, name,contact,age,inst_name } = req.body;

  const data = {
    email: email,
    password: password,
    name: name,
    contact: contact,
    age: age,
    inst_name: inst_name,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      console.log(data);
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post('/logout', (req, res) => {
  // Assuming you are using a cookie-based authentication system
  // Clear the user session/cookie to logout the user
  // Destroy the session cookie
  req.session.isAuth = false;// Replace 'sessionCookieName' with your actual session cookie name
  // Return a success response to the client
  return res.json({ success: true });
});
app.listen(8000, () => {
  console.log("Server connected on port 8000");
});
