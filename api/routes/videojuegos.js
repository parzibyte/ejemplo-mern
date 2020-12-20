var express = require('express');
var router = express.Router();
var Videojuego = require("../modelos/modeloVideojuego.js");

router.post('/', async function (req, res, next) {
  const videojuego = new Videojuego({
    nombre: "Resident Evil 4",
    precio: 180,
    calificacion: 10,
  });
  await videojuego.save();
  res.send(videojuego);
});

router.get('/', async function (req, res, next) {
  const videojuegos = await Videojuego.find();
  res.send(videojuegos);
});

router.put('/', async function (req, res, next) {
  await Videojuego.findOneAndUpdate({
    _id: "5fdeb758f58f8e471012cf80",
  }, {
    nombre: "Nuevo Resident pero con 180 y 10"
  });
  res.send(true);
});

module.exports = router;

