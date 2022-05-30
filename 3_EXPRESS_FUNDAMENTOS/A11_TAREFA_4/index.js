const express = require('express')
const app = express()
const port = 5000 // variável ambiente
const Path = require('path')
const basePath = Path.join(__dirname, 'templates')
const contato = require('./users')


// arquivos estáticos

app.use(express.static('public'))

app.use('/contato', contato)

app.get('/contato', (req, res) =>
{
    res.sendFile(`${basePath}/contato.html`)
})

app.get('/', (req, res) =>
{
    res.sendFile(`${basePath}/index.html`)
})

app.use(function(req,res,next)
{
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () =>
{
    console.log(`Server rodando na porta ${port}`)
})
