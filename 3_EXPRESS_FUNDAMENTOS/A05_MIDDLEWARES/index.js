const express = require('express')
const app = express()
const port = 3000 // variável ambiente
const Path = require('path')
const basePath = Path.join(__dirname, 'templates')

const checkAuth = function(req,res,next)
{
    req.authStatus = false
    if(req.authStatus)
    {
        console.log('Está logado, pode continuar')
        next()
    }
        else
        {
            console.log('Não está logado, faça o login para continuar')
            next()
        }
}

app.use(checkAuth)

app.get('/', (req, res) =>
{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () =>
{
    console.log(`Server rodando na porta ${port}`)
})
