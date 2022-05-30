const express = require('express')
const app = express()
const port = 3000 // variável ambiente
const Path = require('path')
const basePath = Path.join(__dirname, 'templates')

app.get('/', (req, res) =>
{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () =>
{
    console.log(`Server rodando na porta ${port}`)
})
