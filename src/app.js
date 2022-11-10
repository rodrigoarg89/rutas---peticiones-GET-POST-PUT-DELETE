const express = require('express');
require('dotenv').config(); //no lo estamos guardando en una variable, solo lo estamos ejecutando
// si requiero usar variabkles de entorno ejecuto esa linea

const port = process.env.PORT;//ACCEDIENDOA LA VARIABLE PORT

const app = express()

//____________________________________________

app.get('/', (req, res) => {
    res.json([
    {
        id: 1,
        nombre: 'Rodrigo',
        edad: 33,
        pais: 'Mexico'
        
    }, {
        id: 2,
        nombre: 'Rodrigo',
        edad: 33,
        pais: 'Mexico'
        
    }, {
        id: 3,
        nombre: 'Rodrigo',
        edad: 33,
        pais: 'Mexico'
        
    }
    ])
    //res.send()
})

app.post('/', (req, res) => {
    res.json([
        { title:"Hacking etico" }, 
        { title:"Musica" }
    ])
})

app.put('/', (req, res) => {
    res.json([
        { title:"Argentina" }, 
        { title:"Paraguay" }
    ])
})

app.delete('/', (req, res) => {
    res.json([{
        id: 3,
        nombre: 'Rodrigo',
        edad: 33,
        pais: 'Mexico'
        
    }])
})
//____________________________________________
app.listen(port, () => {
    console.log(`Server started in port:${port}`)
})


//app.send maneja text plano 
//app.json maneja json 
