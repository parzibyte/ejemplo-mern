var express = require('express');
var router = express.Router();
var Videojuego = require("../modelos/modeloVideojuego.js");

router.post('/', async function (req, res, next) {
  const videojuego = new Videojuego({
    nombre: req.body.nombre,
    precio: req.body.precio,
    calificacion: req.body.calificacion,
  });
  await videojuego.save();
  res.send(videojuego);
});

router.get('/', async function (req, res) {
  const videojuegos = await Videojuego.find();
  res.send(videojuegos);
});

router.get('/:id', async function (req, res) {
  const videojuego = await Videojuego.findById(req.params.id);
  res.send(videojuego);
});

router.put('/', async function (req, res) {
  await Videojuego.findOneAndUpdate({
    _id: req.body._id,
  }, {
    nombre: req.body.nombre,
    precio: req.body.precio,
    calificacion: req.body.calificacion,
  });
  res.send(true);
});

router.delete('/:id', async function (req, res) {
  await Videojuego.findOneAndDelete({ _id: req.params.id });
  res.send(true);
});

module.exports = router;