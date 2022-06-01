const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req,res) =>
{
    const itens = ["item a", "item b", "item c",]
    res.render('dashboard', {itens})
})

app.get('/post', (req, res) =>
{
    const post =
    {
        title: 'Aprender Node.js',
        category: 'Javascript',
        body: 'Este artigo vai te ajudar a aprender Node.js',
        coments: 4
    }

    res.render('blogpost', {post})
}) 

app.get('/', (req, res) =>
{
    const user =
    {
        name: 'Daniel',
        surname: 'Araujo',
        age: 27
    }

    const palavra = 'teste'

    const auth = true

    res.render('home', {user: user, palavra, auth})
})

app.listen(3000, () =>
{
    console.log('App funcionando!')
})