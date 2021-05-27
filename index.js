const express = require("express");
const mongoose = require("mongoose"); 

const app= express ();

//MONGOOSE Connection
DATABASE= ;
mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
    .then(() => console.log("DB connected"))
    .catch(err => console.error(err))


//ROUTE
app.get('/', (req,res) => {
    res.send("Hello home page from server")
})
//LISTENING
app.listen(8000)