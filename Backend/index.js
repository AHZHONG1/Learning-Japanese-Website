const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.get("/api", (req, res) => {
    res.send("Hello World from Express");
});

app.listen(port, () => console.log(`Server listening at port ${port}`));