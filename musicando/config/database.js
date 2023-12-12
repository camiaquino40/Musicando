const { Sequelize } = require('sequelize');

// Configuración de la conexión a la base de datos MySQL
const sequelize = new Sequelize('musicando', 'usuario', 'contraseña', {
  host: 'localhost', // Host de tu base de datos
  dialect: 'mysql', // Tipo de base de datos (en este caso, MySQL)
});

// Verificar la conexión a la base de datos
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

testConnection(); // Ejecuta la función para probar la conexión al cargar el archivo

module.exports = sequelize; // Exporta la instancia de Sequelize para su uso en otros archivos