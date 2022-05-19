const readline = require("readline").createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    })

readline.question("Qual a sua linguagem favorita? ", (language) => 
    {
        if(language === 'python')
        {
            console.log('ISSO NEM É LINGUAGEM KKKKKKKKKKKKK')
        }
            else
            {
                console.log(`Boa escolha, ${language} é uma ótima linguagem`)
            }
                readline.close()
    })
