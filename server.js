require("dotenv").config();

const express       = require('express');       // pour créer l'api
const morgan        = require("morgan");        // pour plus de détails dans les logs d'erreurs
const cors          = require('cors');          // pour la sécurité et eviter des pb avec react 
const helmet        = require('helmet');        // pour la sécurité et eviter des pb avec react


const server = express();

server.use(morgan("dev"));
server.use(helmet());
server.use(cors());

server.get("/", (req, res)=>{
    res.status(200).send("<h1>It works ! Yeah</h1>");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> {
    console.log("server ecoute à l'adresse :http://"+ process.env.URL + ":" + PORT);
})