const port = 8080,
			express = require("express"),
			app = express();
app.get("/version", (req, res) => {
 res.send(`This is version 0 of the HotBurger service`);
});
app.listen(port, () => {
 console.log(`Server running on port: ${port}`);
});