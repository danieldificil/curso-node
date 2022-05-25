import path from "path";

const Path = path

// path absoluto
console.log(Path.resolve('teste.txt'))

// formar path
const midFolder = 'relatorios'
const fileName = 'Daniel.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)
