const mongoose = require("mongoose");

const twSchema = new mongoose.Schema({
    body:{
        type : String,
        require:true,
        trim: true,
        maxLength: 150,
        minLength:0
    },
    users :{
        type: mongoose.Types.ObjectId,
        ref: "users"
    }
},{
    timestamps:true,
})

module.exports = mongoose.model("tws", twSchema)