const express = require('express');
const app = express();
const cancionesRouter = require('./routes/canciones');
const generosRouter = require('./routes/generos');


app.use(express.json());


app.use('/canciones', cancionesRouter);
app.use('/generos', generosRouter);


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
