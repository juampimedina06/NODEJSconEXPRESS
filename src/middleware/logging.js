const loggingMdw = (req, res, next) =>{ 
    console.log(`Se hizo un request a la URL: ${req.url}`)
    res.header('Context-type', 'application/json')
    next();
}

module.exports = loggingMdw;