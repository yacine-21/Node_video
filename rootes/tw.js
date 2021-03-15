const express = require("express");

const Router = express.Router();

let tws = [{
    msg : "Ceci est le message du tweet 1",
    author : "Yacine Lyoubi",
    Like : 50,
    RT : 55
},{
    msg : "Ceci est le message du tweet 2",
    author : "Yacine Lyoubi",
    Like : 250,
    RT : 489
},{
    msg : "Ceci est le message du tweet 3",
    author : "Yacine Lyoubi",
    Like : 99,
    RT : 64
}]

let citation = [{
    msg : "Je serai le roi des pirates",
    author : "Monkey D Luffy"
},{
    msg : "Je serai le meilleur bretteur du monde",
    author : "Rorona Zoro"
},{
    msg : "Je serai un grand guerrier des mers",
    author : "Usopp"
}]

// GET : /api/tws
Router.get("/api/tws", (req,res) =>{
    res.status(200).send(tws);
})

Router.get("/api/anime", (req,res) =>{
    res.status(200).send(citation);
})

module.exports = Router;