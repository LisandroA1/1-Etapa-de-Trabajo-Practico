import express from 'express'
import { readFile } from 'fs/promises'


import userRouter from './routes/user.routes.js'
import productRouter from './routes/product.routes.js'
import salesRouter from './routes/sales.routes.js'

//Crear instancia
const app = express()
//Configurar puerto
const port = 3000
//Levantar el servidor
app.listen(port, () =>{
    console.log(`Servidor levantado en puerto ${port}`)
})

app.use(express.json())
app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/sales', salesRouter)





