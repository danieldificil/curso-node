import fs from 'fs'

const Fs = fs 

if(!Fs.existsSync('./minhapasta'))
{
    console.log('Não existe esse diretório')
}

Fs.mkdirSync('minhapasta')

if(Fs.existsSync('./minhapasta'))
{
    console.log('ESSE DIRETÓRIO EXISTE!')
}