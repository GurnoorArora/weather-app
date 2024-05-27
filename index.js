const express = require('express');
const axios = require('axios');
const app = express();

const port = 3000;
app.use(express.static('./public'));
app.get('/', async (req, res) => {
    const city = req.query.city;
   
    const apiKey = 'dd3c506e64b5cf890e9f9c1612ba6a1c';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch weather data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
