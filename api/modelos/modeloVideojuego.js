const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/videojuegos', { useNewUrlParser: true, useUnifiedTopology: true });

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