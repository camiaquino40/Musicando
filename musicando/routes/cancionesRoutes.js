const express = require('express');
const router = express.Router();
const cancionController = require('../controllers/cancionController');
const Cancion = require('./models/Cancion');

router.get('/', cancionController.obtenerCanciones);
router.post('/', cancionController.crearCancion);
router.put('/:id', cancionController.actualizarCancion);
router.delete('/:id', cancionController.eliminarCancion);




const cancionesController = {
  obtenerCanciones(req, res) {
    
    const Cancion = require('../models/Cancion'); 
  
    Cancion.findAll()
      .then(canciones => {
        res.status(200).json({ canciones });
      })
      .catch(error => {
        res.status(500).json({ error: 'Ocurrió un error al obtener las canciones.' });
      });
  },
  crearCancion(req, res) {
    const { nombre, artista, duracion } = req.body;
    const Cancion = require('../models/Cancion'); 
  
    Cancion.create({ nombre, artista, duracion })
      .then(cancion => {
        res.status(201).json({ cancion, message: 'Canción creada exitosamente.' });
      })
      .catch(error => {
        res.status(500).json({ error: 'Ocurrió un error al crear la canción.' });
      });
  },
  obtenerCancionPorId(req, res) {
    const id = req.params.id;
    const Cancion = require('../models/Cancion'); 
  
    Cancion.findByPk(id)
      .then(cancion => {
        if (cancion) {
          res.status(200).json({ cancion });
        } else {
          res.status(404).json({ message: 'Canción no encontrada.' });
        }
      })
      .catch(error => {
        res.status(500).json({ error: 'Ocurrió un error al obtener la canción.' });
      });
  },
  editarCancion(req, res) {
    const id = req.params.id;
    const { nombre, artista, duracion } = req.body;
    const Cancion = require('../models/Cancion'); 
  
    Cancion.findByPk(id)
      .then(cancion => {
        if (cancion) {
          return cancion.update({ nombre, artista, duracion });
        } else {
          res.status(404).json({ message: 'Canción no encontrada.' });
        }
      })
      .then(cancionActualizada => {
        res.status(200).json({ cancionActualizada, message: 'Canción actualizada exitosamente.' });
      })
      .catch(error => {
        res.status(500).json({ error: 'Ocurrió un error al editar la canción.' });
      });
  },
  eliminarCancion(req, res) {
    const id = req.params.id;
    const Cancion = require('../models/Cancion'); 
  
    Cancion.findByPk(id)
      .then(cancion => {
        if (cancion) {
          return cancion.destroy();
        } else {
          res.status(404).json({ message: 'Canción no encontrada.' });
        }
      })
      .then(() => {
        res.status(200).json({ message: 'Canción eliminada correctamente.' });
      })
      .catch(error => {
        res.status(500).json({ error: 'Ocurrió un error al eliminar la canción.' });
      });
  }
};




module.exports = router;

