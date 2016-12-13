const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use('/static', express.static(__dirname + '/static'));

app.get('*', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(port, () => console.log(`Listening on ${port}`));
