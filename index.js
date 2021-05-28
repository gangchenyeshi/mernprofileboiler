const express = require("express");
const mongoose = require("mongoose"); 
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app= express ();

const port = 8000;

//Import usermodel
const { User }  = require('./model/users');

//Import key file inside there DB link
const config = require('./config/key')


//MIDDLEWARE
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());

//MONGOOSE Connection
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
    .then(() => console.log("DB connected"))
    .catch(err => console.error(err))


//ROUTE
//HOME
app.get('/', (req,res) => {
    res.send("Hello home page from server")
});

//Register user (POST METHOD)
app.post("/register", (req, res) => {
  //create var for  store the Data
  const userNew = new User(req.body);

  userNew.save((err, doc) => {
      if (err) return res.status(402).json({ success: false, err }); //If err success is false
      return res.status(200).json({
          success: true
      });
  });
});

//LISTENING
app.listen(port, () => {
  console.log("Server is connected")
})