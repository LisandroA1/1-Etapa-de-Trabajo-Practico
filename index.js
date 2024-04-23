import { readFile } from 'fs/promises'
const produc = await readFile('./productos.json' , 'utf-8')
const usuar = await readFile('./usuarios.json' , 'utf-8')
const vent = await readFile('./ventas.json' , 'utf-8')
const productos = JSON.parse(produc)
const usuarios = JSON.parse(usuar)
const ventas = JSON.parse(vent)

console.log(productos)
console.log(usuarios)
console.log(ventas)
