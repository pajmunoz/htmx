const axios = require('axios');
const cors = require('cors');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// Endpoint para obtener datos de la API
app.get('/data', async (req, res) => {
    try {
        const response = await axios.get('https://pajmunoz.github.io/htmx/api.json');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.post('/data', async (req, res) => {
    try {
        // Aquí puedes manejar la lógica para procesar los datos recibidos en la solicitud POST
        // Por ejemplo, podrías guardarlos en una base de datos, etc.
        console.log('Data received:', req.body);
        res.status(200).json({ message: 'Data received successfully' });
    } catch (error) {
        console.error('Error processing data:', error);
        res.status(500).json({ error: 'Failed to process data' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}, http://localhost:3000/data`);
});