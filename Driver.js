const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
 var str = str.link("https://google.com");
 res.send('${str}');
});

app.get("/version", (req, res) => {
 res.send(`This is version 0 of the HotBurger service`);
});
app.listen(port, () => {
 console.log(`Server running on port: ${port}`);
});