const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello from the server side!',
        app: 'Natours',
    });
});

app.post('/', (req, res) => {
    res.send('You can post to this endpoint...');
});

const port = 3501;
app.listen(port, () => {
    console.log(`Server is alive on http://127.0.0.1:${port}...`);
});
