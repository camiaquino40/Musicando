const Sequelize = require('sequelize');

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize('musicando', 'root', '', {
  host: 'localhost', 
  dialect: 'mysql', 
  port: 3306, 
});

// Prueba de conexión
sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

module.exports = sequelize;
