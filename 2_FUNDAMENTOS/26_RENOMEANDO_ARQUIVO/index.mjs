import fs from 'fs'

const Fs = fs 
const arqAntigo = 'arquivo.txt'
const arqNovo = 'novo.txt'

Fs.rename(arqAntigo, arqNovo, function (err)
{
    if(err)
    {
        console.log(err)
        return
    }
        else
        {
            console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}`)
        }
})