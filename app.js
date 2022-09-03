const express = require("express")
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, './public')));

app.use(express.static(__dirname +'/views'));

app.get('/', (req, res) => {
    res.send('ahora si entre')
})

app.get('/mostrar_sitio', (req, res) => {
    res.sendFile((__dirname + '/views/home.html'))
})

app.get('/register.html', (req,res) => {
    res.sendFile(path.resolve(__dirname + '/views/register.html'));
});

app.get('/login.html', (req,res) => {
    res.sendFile(path.resolve(__dirname + '/views/login.html'));
});

app.get('*', (req, res) => {
    res.send('ruta restringida ****')
})

/*
app.listen(3100, function() {
    console.log("Levantando un servidor con Express")
})
*/

app.listen(prooces.env.PORT || 3100, function() {
    console.log("Levantando un servidor con Express")
})