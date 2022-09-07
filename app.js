const express = require("express")
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, './public')));

app.use(express.static(__dirname +'/views'));

app.get('/', (req, res) => {
    res.send('ahora si entre')
})

app.get('/home', (req, res) => {
    res.sendFile((__dirname + '/views/home.html'))
})

app.get('/register', (req,res) => {
    res.sendFile(path.resolve(__dirname + '/views/register.html'));
});

app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname + '/views/login.html'));
});

app.get('*', (req, res) => {
    res.send('ruta restringida ****')
})


app.listen(process.env.PORT || 3000, function() {
    console.log("Levantando un servidor con Express")
})