import { Router } from "express"
import {readFile, writeFile} from 'fs/promises'
const fileSales = await readFile('./data/sales.json', 'utf-8')
const salesData = JSON.parse(fileSales)
const router = Router()

router.delete('/delete/:id', (req, res) =>{
    const sale_id = req.params.id

    try{
        const index = salesData.findIndex(e => e.id == e.sale_id)

        if(index !== -1 ){
            salesData.splice(index,1)  /*splice lo que hace es decir eliminame de aca hasta cierto numero de elemento*/
            writeFile('./data/sales.json', JSON.stringify(salesData,null,2)) 
            res.send(200).json('Usuario Eliminado')
        }else{
            res.send(400).json('No se encontro la venta')
        }

    }catch(error){
        res.send(500).json('Error al eliminar venta')
    }
})

export default router