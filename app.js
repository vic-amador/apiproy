// app.js
const express = require('express');
const app = express();
const port = 3000; // Elige el puerto que desees

// Importa la conexión a la base de datos
const db = require('./db');

// Ruta para obtener los reportes
app.get('/Reportes', (req, res) => {
  db.query('SELECT reporte_id, firstName, lastName, location_report, image FROM report', (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos: ' + err);
      res.status(500).json({ error: 'Error al obtener los reportes' });
      return;
    }

    // Modificar la respuesta para convertir la imagen a base64
    const resultsWithBase64Image = results.map((result) => {
      if (result.image && result.image.data) {
        // Convierte los datos de la imagen en base64
        result.image = {
          data: Buffer.from(result.image.data).toString('base64'),
          type: 'image/jpeg' // Cambia el tipo de imagen según corresponda
        };
      }
      return result;
    });

    res.json(resultsWithBase64Image);
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
