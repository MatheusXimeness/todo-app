// --- Arquivo de conexão com o banco de dados ---
const mogoose = require('mongoose')
mogoose.Promise = global.Promise
module.exports = mogoose.connect('mongodb://localhost/todo')