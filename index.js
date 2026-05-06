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
    const contacto = contactos.find(c => c.id === Number(id)) //busca el id

    if(!contacto){
        res.status(404).json({error: 'Contacto no econtrado'})
        return
    }
    res.json(contacto)
})
app.post('/contactos',async function(req, res){
    const email = req.body.email
    const nombre = req.body.nombre
    if(!email || !nombre){
        res.json('El email y el nombre son obligatorios')
    }else{
        const nuevoContacto = {
            id: contactos.length+1,
            nombre: nombre,
            email: email,
            telefono: req.body.telefono,
        }
        contactos.push(nuevoContacto)
        res.json(nuevoContacto)
    }
})
app.delete('/contactos/:id',async function(req, res){
    const id = req.params.id
    const indice = contactos.findIndex(c=>c.id === Number(id))
    if(indice === -1){
        res.status(404).json({error:'Contacto no encontrado'})
        return
    }
    contactos.splice(indice, 1)
    res.json({mensaje:'Contacto eliminado'})
})
app.put('/contactos/:id',async function(req, res){
    const id = req.params.id
    const indice = contactos.findIndex(c=>c.id === Number(id))
    if(indice === -1){
        res.status(404).json({error:'Contacto no encontrado'})
    }else{
        
        const actContacto = {
                id: contactos[indice].id,
                nombre: req.body.nombre,
                email: req.body.email,
                telefono: req.body.telefono,
            }
            contactos[indice]=actContacto
    }
    res.status(200).json({mensaje:'Contacto actualizado'})
})
app.listen(3000,function(){
    console.log('Servidor corriendo en http://localhost:3000')
})




