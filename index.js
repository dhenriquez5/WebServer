const express = require('express')
require('dotenv').config();

const app = express()

///SERVIR CONTENIDO ESTATICO
app.use(express.static('public'));


app.get('/generic', (req, res) => {
    res.sendFile(__dirname+'/public/generic.html');
})


app.get('/elements', (req, res) => {
    res.sendFile(__dirname+'/public/elements.html');
})



app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/404.html');
})

app.listen(process.env.PORT || 3000, () => {
console.log('listening on port ' +process.env.PORT );
})