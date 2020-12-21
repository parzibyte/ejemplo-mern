const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/videojuegos', { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose;