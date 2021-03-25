const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    usersname : {type: String, required: true},
    email : {type : String, required: true},
    password : {type : String, required: true},
    tws: [{
        type: mongoose.Types.ObjectId,
        ref: "tws"
    }]
},{
    timestamps:true,
})

module.exports = mongoose.model("users", userSchema)