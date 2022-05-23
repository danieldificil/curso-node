import chalk from 'chalk' 
import inquirer from 'inquirer'

const Chalk = chalk
const Inquirer = inquirer

Inquirer.prompt([
    {
        name: 'name',
        message: 'Qual é seu nome?'
    },
    {
        name: 'age',
        message: 'Qual é sua idade'
    }
])
    .then((resp) =>
    {
        let name = resp.name
        let age = resp.age

        console.log(Chalk.bgYellow.black(`SEJA BEM VINDO! ${name}, seu usuário e idade "${age}", foram armazenados com SUCESSO!`))
    })    
        .catch((err) =>
        {
            console.log(Chalk.bgRed.white('ERRO: preencha os dados corretamente'))
        })