const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const itens =     
[{
    id: '1',
    title: 'Bota Aba', 
    category: 'High Stakes',
    body: 'Elegante, com design inspirado na coleção ablabluble',
    price: "1000,00"
},
{
    id: '2',
    title: 'Sapato Bomb',    
    category: 'Legacy',
    body: 'Perfeito para você que está procurando conforto e elegância',
    price: "2000,00"
},
{
    id: '3',
    title: 'Tênis Course',
    category: 'Fit',
    body: 'Premiado 3 vezes como o "tenis mais confortavel para corridas de longa distância"',
    price: "5000,00"
}]

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) =>
{
    res.render('home', {itens})
})

app.get('/product/:id', (req, res) =>
{
    const product = itens[req.params.id - 1]

    res.render('product', {product})
})

app.listen(3000, () =>
{
    console.log('App funcionando!')
})