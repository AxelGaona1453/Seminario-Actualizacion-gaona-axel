const express = require('express');
const app = express();
const PORT = 3000;

// Memoria volátil del servidor (se borra si reinicias el servidor)
// Estructura: { "id-del-cliente-1": [alumnos...], "id-del-cliente-2": [alumnos...] }
const memoriaBackend = {};

app.use(express.json());
// Sirve automáticamente los archivos que pongas en la carpeta "public"
app.use(express.static('public'));

// Endpoint para obtener los alumnos del cliente que lo solicita
app.get('/api/alumnos', (req, res) => {
    const clientId = req.headers['x-client-id'];
    if (!clientId) return res.status(400).json({ error: 'Falta identificador' });
    
    // Devuelve los datos de ese cliente o un array vacío si es nuevo
    res.json(memoriaBackend[clientId] || []);
});

// Endpoint para guardar un alumno
app.post('/api/alumnos', (req, res) => {
    const clientId = req.headers['x-client-id'];
    if (!clientId) return res.status(400).json({ error: 'Falta identificador' });
    
    if (!memoriaBackend[clientId]) {
        memoriaBackend[clientId] = []; // Inicializa la lista si no existe
    }
    
    memoriaBackend[clientId].push(req.body);
    res.json({ success: true });
});

// Endpoint para vaciar la lista del cliente
app.delete('/api/alumnos', (req, res) => {
    const clientId = req.headers['x-client-id'];
    if (!clientId) return res.status(400).json({ error: 'Falta identificador' });
    
    memoriaBackend[clientId] = [];
    res.json({ success: true });
});

// Iniciar el servidor accesible desde cualquier IP en la red local
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    console.log(`Accede localmente: http://localhost:${PORT}`);
    console.log(`Para acceder desde otra PC/Celular, usa la IP de esta máquina: http://TU_DIRECCION_IP:${PORT}`);
});