// server/index.js

const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Hacer que node sirva los archivos de nuestra app React
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Manejar las peticiones GET en la ruta /api
app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
});

// Todas las peticiones GET que no hayamos manejado en las líneas anteriores retornarán nuestro App React
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(
    PORT,
    () => { console.log(`Server listening on ${PORT}`)}    
);