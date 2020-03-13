// --- Arquivo que vai carregar os principais arquivos de config ---
const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)