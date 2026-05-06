const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
const contactos = [{ id: 1, nombre: 'Ana García', email: 'ana@gmail.com', telefono: '612345678' }]


app.get('/contactos',async function(req, res){
    res.json(contactos)
})
app.get('/contactos/:id',async function(req, res){
    const id = req.params.id //lee id 
    const contactos = contactos.find(c => c.id === Number(id)) //busca el id

    if(!contactos0){
        res.status(404).json({error: 'Contacto no econtrado'})
        return
    }
})
app.post('/contactos',async function(req, res){

})
app.delete('/contactos/:id',async function(req, res){

})
app.put('/contactos/:id',async function(req, res){

})
app.listen(3000,function(){
    console.log('Servidor corriendo en http://localhost:3000')
})




