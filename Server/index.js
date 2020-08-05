const express = require('express');

// Create an application
const app = express();

app.get('/', (request, response) => {
    response.json({
        message: 'meower!🐱'
    });
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000')
});