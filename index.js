const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi express server')
});
app.get('/nueva-ruta', (req, res) => {
  res.json({
    ruta: "nueva-ruta",
    saludo: "Hola"
  })
});
app.get('/productos', (req, res) => {
  res.json({
    nombre: "Bujia denso 3130",
    precio: 25
  })
});

app.listen(port, () =>{
  console.log('Escuchando en: '+ port)
});
