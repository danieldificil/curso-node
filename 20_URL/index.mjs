import url from 'url'

const Url = url
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'
const parserUrl = new Url.URL(address)

console.log(parserUrl.host)
console.log(parserUrl.pathname)
console.log(parserUrl.search)
console.log(parserUrl.searchParams)
console.log(parserUrl.searchParams.get('produtos'))