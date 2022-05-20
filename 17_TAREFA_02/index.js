import 'chalk' from './node_modules/chalk'
import 'inquirer' from './node_modules/inquirer'

const Chalk = chalk
const Inquirer = inquirer

inquirer.prompt([
    {
        name: 'name',
        message: 'Qual é seu nome?'
    },
    {
        idade: 'age',
        message: 'Qual é sua idade'
    }
])
    .then((resp) =>
    {
        console.log(resp)
        const name = resp.name
        const age = resp.age
        console.log(Chalk.bgYellow.black(`Seja bem vindo ${name}, você tem: ${age} anos.`))
    })
        .then((resp) =>
        {
            try
            {
                resp.age >= 100
            }
                catch (err)
                {
                    console.log(Chalk.bgRed.white('ERRO: Insira a idade novamente'))
                }
        })