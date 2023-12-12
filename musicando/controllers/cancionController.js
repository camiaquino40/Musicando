const Cancion = require('./models/Cancion');

exports.obtenerCanciones = async (req, res) => {
  try {
    const canciones = await Cancion.findAll();
    res.status(200).json({ canciones });
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error al obtener las canciones', error: error.message });
  }
};

exports.crearCancion = async (req, res) => {
  try {
    const nuevaCancion = await Cancion.create(req.body);
    res.status(201).json({ message: 'Canción creada exitosamente', cancion: nuevaCancion });
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error al crear la canción', error: error.message });
  }
};

exports.actualizarCancion = async (req, res) => {
  const { id } = req.params;
  try {
    const [numFilasActualizadas, cancionesActualizadas] = await Cancion.update(req.body, {
      where: { id },
      returning: true,
    });

    if (numFilasActualizadas === 0) {
      return res.status(404).json({ message: 'No se encontró la canción para actualizar' });
    }

    res.status(200).json({ message: 'Canción actualizada exitosamente', cancionesActualizadas });
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error al actualizar la canción', error: error.message });
  }
};

exports.eliminarCancion = async (req, res) => {
  const { id } = req.params;
  try {
    const numFilasEliminadas = await Cancion.destroy({ where: { id } });

    if (numFilasEliminadas === 0) {
      return res.status(404).json({ message: 'No se encontró la canción para eliminar' });
    }

    res.status(200).json({ message: 'Canción eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error al eliminar la canción', error: error.message });
  }
};
