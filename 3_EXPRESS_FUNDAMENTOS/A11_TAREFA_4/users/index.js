const express = require('express')
const Router = express.Router()
const Path = require('path')
const basePath = Path.join(__dirname, '../templates')

Router.get('/contato', (req, res) =>
{
    res.sendFile(`${basePath}/contato.html`)
})

module.exports = Router