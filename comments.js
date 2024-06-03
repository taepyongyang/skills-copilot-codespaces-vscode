// Create web server
// 1. require express
// 2. create an express app
// 3. create a route
// 4. listen on a port

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});