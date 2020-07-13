const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/noderest', {useMongoClient: true}).then(() =>{
    console.log("Banco de dados conectado com sucesso!")
}).catch((error) => {
    console.log("Não foi possível conectar ao banco de dados.")
})

mongoose.Promise = global.Promise

module.exports = mongoose