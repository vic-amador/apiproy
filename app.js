// app.js
const express = require('express');
const app = express();
const port = 3000; // Elige el puerto que desees

// Importa la conexión a la base de datos
const db = require('./db');

// Ruta para obtener los reportes
app.get('/Reportes', (req, res) => {
  db.query('SELECT * FROM report', (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos: ' + err);
      res.status(500).json({ error: 'Error al obtener los reportes' });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});