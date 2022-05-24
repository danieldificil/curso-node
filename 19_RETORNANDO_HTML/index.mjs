import http from 'http'


const Http = http

const port = 3000

const server = Http.createServer((req, res)=>
{
    res.statusCode = 200
    res.setHeader('content-type', 'text/html')
    res.end('<h1>Olá, este é meu primeiro server com html</h1><p>Testando atualização</p>')
})

server.listen(port, () =>
{ 
    console.log(`servidor rodando na porta: ${port}`)
})