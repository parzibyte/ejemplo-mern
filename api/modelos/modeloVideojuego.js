const mongoose = require('../conexion_mongo');
const Videojuego = mongoose.model('Videojuego', {
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
        min: 0,
    },
    calificacion: {
        type: Number,
        required: true,
        min: 0,
    },
});

module.exports = Videojuego;