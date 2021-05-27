const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, maxlength: 50},
    email: { type: String, trim:true, unique:1},
    password: { type: String,  minlength: 8 },
    lastname: {  type: String, maxlength: 50 },
    role: { type: number, maxlength: 0 },
    token: { type: String },
    tokenExp: { type: Number }
})

const Users = mongoose.model("user", userSchema);

module.export = { Users };