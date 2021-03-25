const express = require("express");
const twModel = require("../models/tw")

const Router = express.Router();

// let tws = [{
//     msg : "Ceci est le message du tweet 1",
//     author : "Yacine Lyoubi",
//     Like : 50,
//     RT : 55
// },{
//     msg : "Ceci est le message du tweet 2",
//     author : "Yacine Lyoubi",
//     Like : 250,
//     RT : 489
// },{
//     msg : "Ceci est le message du tweet 3",
//     author : "Yacine Lyoubi",
//     Like : 99,
//     RT : 64
// }]

// GET : /api/tws
Router.get("/api/tws", (req,res, next) =>{
    twModel.find()
    .then(tws => res.status(200).send(tws))
    .catch(error => next(error));
})

// GET : /api/tws/:twId
Router.get("/api/tws/:twId", (req,res,next) =>{
    const id = req.params.twId

    twModel.findOne({_id: id})
    .populate("user")
    .then(tw => {
        if(tw === null)
            res.status(200).send("il n'y a pas de tweet, il a été supprimé")
        res.status(200).send(tw)
    })
    .catch(error => next(error));
})
// POST : /api/tws
Router.post("/api/tws", (req, res, next) =>{
    console.log(req)
    const tw = new twModel({
        body: req.body.body
    });

    tw.save()
    .then(tw => res.status(200).send(tw))
    .catch(error => next(error));
});

// PATCH ./api/tws/:twId
Router.patch("/api/tws/:twId", (req,res,next) =>{
    const id = req.params.twId;

    twModel.updateOne({_id:id},{$set:{body: req.body.body}})
    .then(tw => res.status(200).send("Votre tweet a bien été modfié"))
    .catch(error => next(error));
});



//DELETE ./api/tws/:twId
Router.delete("/api/tws/:twId", (req,res,next) =>{
    const id = req.params.twId;

    twModel.remove({_id: id})
    .exec()
    .then(result =>{res.status(202).send("Tweet bien supprimé.")})
    .catch(error => next(error));
})

module.exports = Router;