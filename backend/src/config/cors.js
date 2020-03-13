
//Como o frontend e o backend trabalham com portas diferentes
//é necessário a utilização desse middleware para que as requisições da aplicação venham de origem diferente
module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Methods', 'Origin, X-Requested-Widh, Content-Type, Accept')
    next()
}