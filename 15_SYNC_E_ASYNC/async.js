const fs = require('fs')

console.log('início')

fs.writeFile('arquivo.txt', 'oi', function (err)
{
    setTimeout(function ()
    {
        console.log('ARQUIVO CRIADO!')
    }, 1000)
})

console.log('fim')