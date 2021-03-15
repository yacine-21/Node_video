// MIDDLEWARES QUI PERMET DE GERER LES ERREURS 

const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; 
    res.status(statusCode);
    res.json({
        message : error.message,
        stack : process.env.NODE_ENV === "production" ? "Error" : error.stack
    })
}

module.exports = errorHandler;