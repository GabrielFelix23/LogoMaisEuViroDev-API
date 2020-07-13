const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//Confg do Body-Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

require('./controllers/authController')(app)

//Porta do servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})