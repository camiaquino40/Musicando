const express = require('express')
const Sequelize =require('sequelize')
const app = express()

const cancionesRoutes = require('./routes/cancionesRoutes');
const generosRoutes = require('./routes/generosRoutes');


app.use('/canciones', cancionesRoutes);
app.use('/generos', generosRoutes);



app.listen(3000, ()=>{
    console.log('Server up')
})