import Express  from "express";
import path from "path";

const express = Express
const app = express()
const port = 3000 // variável ambiente

app.get('/', (req, res) =>
{
    res.send('Olá mundo!')
})

app.listen(port, () =>
{
    console.log(`Server rodando na porta ${port}`)
})
