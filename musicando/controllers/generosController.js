const Genero = require('../models/Genero'); 
const Cancion = require('../models/Cancion'); 

const generosController = {
  obtenerGenerosConCanciones(req, res) {
    Genero.findAll({
      include: [{ model: Cancion }] 
    })
    .then(generos => {
      res.status(200).json({ generos });
    })
    .catch(error => {
      res.status(500).json({ error: 'Ocurrió un error al obtener los géneros con canciones.' });
    });
  }
};

module.exports = generosController;
