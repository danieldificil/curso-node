const express = require('express')
const app = express()
const port = 3000 // variável ambiente
const Path = require('path')
const basePath = Path.join(__dirname, 'templates')
const users = require('./users')

//ler body
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

// arquivos estáticos

app.use(express.static('public'))

app.use('/users', users)

app.get('/', (req, res) =>
{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () =>
{
    console.log(`Server rodando na porta ${port}`)
})