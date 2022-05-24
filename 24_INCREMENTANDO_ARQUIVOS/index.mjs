import http from 'http'
import fs from 'fs'
import url from 'url'

const Http = http
const Fs = fs
const port = 3000

const server = Http.createServer((req,res) =>
{
    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name

    if(!name)
    {
        Fs.readFile('index.html', function(err, data)
        {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end( )
        })
    }
        else
        {
            const newNameLine = `${name}, \r`

            Fs.appendFile('arquivo.txt', newNameLine,
            function(err, data)
            {
                res.writeHead(302, 
                {
                    location:'/'
                })
                return res.end()
            })
        }
})

server.listen(port, () => 
    {
        console.log(`Servidor rodando na porta: ${port}`)
    })