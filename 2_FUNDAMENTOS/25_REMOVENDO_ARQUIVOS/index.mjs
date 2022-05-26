import fs from 'fs'

const Fs = fs

Fs.unlink('arquivo.txt', function (err)
{
   if (err)
   {
       console.log(err)
       return
   } 

   console.log('Arquivo removido!')
})