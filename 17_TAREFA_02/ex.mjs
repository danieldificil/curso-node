import chalk from "chalk";
import inquirer from "inquirer";
const Chalk = chalk
const Inquirer = inquirer

Inquirer.prompt([
{
    name: 'nome',
    message: 'Qual é seu nome?'
},
{
    name: 'idade',
    message: 'Qual é sua idade'
}
])
    .then((resp) =>
    {
        if (!resp.nome || !resp.idade)
        {
            throw new Error(Chalk.bgRed.white('por favor, digite o nome e idade.'))
        }
        const response = `O nome do usuário é ${resp.nome} e ele tem ${resp.idade}`

        console.log(Chalk.bgYellow.black(response))
    })
    .catch((err) => console.log(err))
