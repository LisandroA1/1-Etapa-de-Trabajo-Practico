import { Router } from "express"

import {readFile, writeFile} from 'fs/promises'
const fileUser = await readFile('./data/users.json', 'utf-8')
const userData = JSON.parse(fileUser)
const router = Router()

router.post('/login', (req, res)=>{
    const userName = req.body.nombre
    const pass = req.body.contraseña

    const result = userData.find(e => e.nombre == userName && e.contraseña == pass)

    if(result){
        res.send(200).json(`Bienvenido ${result.nombre}`)
    }else{
        res.send(400).json(`${userName} no se encuentra`)
    }
})

router.get('/login/byId/:id', (req, res) =>{
    const id = parseInt(req.params.id)

    const result = userData.find(e => e.id == id)

    if(result){
        res.status(200).json(result)
    }else{
        res.status(400).json(`${id} no se encuentra`)
    }
})

export default router