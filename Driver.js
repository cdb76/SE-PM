const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
 res.send('Go to /version or /logs');
});

app.get("/version", (req, res) => {
 res.send(`This is version 0 of the HotBurger service`);
});

app.get("/logs", (req, res) => {
 res.send(`Logs`);
});

app.listen(port, () => {
 console.log(`Server running on port: ${port}`);
});