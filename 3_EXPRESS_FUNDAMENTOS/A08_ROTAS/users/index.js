const express = require('express')
const Router = express.Router()
const Path = require('path')
const basePath = Path.join(__dirname, '../templates')

Router.get('/add', (req, res) =>
{
    res.sendFile(`${basePath}/userform.html`)
})

Router.post('/save', (req, res) =>
{
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`)

    res.sendFile(`${basePath}/userform.html`)
})

Router.get('/:id', (req, res) =>
{
    const id = req.params.id
    
    // leitura da tabela users, resgatar um usuário
    console.log(`Estamos buscando pelo usuário ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

module.exports = Router