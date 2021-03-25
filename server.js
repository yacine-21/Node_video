require("dotenv").config();                                                     // importe le fichier dotenv

const express       = require('express');                                       // pour créer l'api
const morgan        = require("morgan");                                        // pour plus de détails dans les logs d'erreurs
const cors          = require('cors');                                          // pour la sécurité et eviter des pb avec react 
const helmet        = require('helmet');                                        // pour la sécurité et eviter des pb avec react
const bodyParser    = require("body-parser");
const connectDB = require("./middlewares/db");
const errorHandler = require("./middlewares/errorHandler")                      // importe le middleware pour gerer les erreurs
const notFound = require("./middlewares/notFound")                              // importe le middeware pour gerer les erreurs 404

connectDB();
express.use(bodyParser.json)
const routeTws = require("./rootes/tw");                                        // importe les routes qu'on as créer 


const server = express();

server.use(morgan("dev"));
server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res)=>{
    res.status(200).send("<h1>It works ! Yeah</h1>");
});

server.use("/", routeTws)


server.use(notFound)
server.use(errorHandler)

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> console.log("server ecoute à l'adresse :http://"+ process.env.URL + ":" + PORT));