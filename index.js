const express = require('express') //importando el modulo express

const app = express()

//http://localhost:3000/
app.get('/', (req, res) => {
    res.json({msg: 'HELLO GET'})
})

//http://localhost:3000/
app.get('/:user/:pass', (req, res) => {
    const {user, pass} = req.params
    if (user === 'gerardo' && pass === '123'){
        res.json({msg: 'Iniciaste sesión con éxito'})
    }
    res.json({msg: 'Error en el usuario o contraseña'})
})

//http://localhost:3000/
app.get('/', (req, res) => {
    res.send("Hello with GET!")
})

//http://localhost:3000/
app.post('/', (req, res) => {
    res.send("Hello with POST!")
})

//http://localhost:3000/
app.put('/', (req, res) => {
    res.json({msg: 'HELLO PUT'})
})

//http://localhost:3000/
app.patch('/', (req, res) => {
    res.json({msg: 'HELLO PATCH'})
})

//http://localhost:3000/
app.delete('/', (req, res) => {
    res.json({msg: 'HELLO DELETE'})
})

app.listen(3000, () => {console.log('listening on port 3000')})
