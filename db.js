// db.js
const mysql = require('mysql');

const dbConfig = {
  host: 'reportes-1.ce41nxatcuur.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Proymodular123.',
  database: 'Reportes'
};

const connection = mysql.createConnection(dbConfig);

connection.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err);
    return;
  }
  console.log('Conexión a la base de datos establecida');
});

module.exports = connection;