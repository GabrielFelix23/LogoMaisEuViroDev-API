const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:Mudar@123@logomaiseuvirodev.vxe0z.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useMongoClient: true, 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>{
    console.log("Banco de dados conectado com sucesso!")
}).catch((error) => {
    console.log("Não foi possível conectar ao banco de dados.")
})

mongoose.Promise = global.Promise

module.exports = mongoose