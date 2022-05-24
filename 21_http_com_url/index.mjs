import http from 'http'
import url from 'url'

const Http = http
const port = 3000

const server = Http.createServer((req, res)=>
{
    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name

    
    res.statusCode = 200
    res.setHeader('content-type', 'text/html')
   
    if (!name)
    {
        res.end('<h1>Preencha seu nome:</h1><form method="GET"><input type="text" name="name" /><button type="submit" name="submit" >Enviar</button></form>')
    }
        else
        {
            res.end(`<h1>Seja bem vindo ${name}</h1>`)
        }
})

server.listen(port, () =>
{ 
    console.log(`servidor rodando na porta: ${port}`)
})
