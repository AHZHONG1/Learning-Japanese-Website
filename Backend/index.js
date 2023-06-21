const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const db = require("./database");

const vocabRouter = require("./routes/vocabRouter");

const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json())

db.on('connected', function(){console.log("connection, successful")});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use('/api', vocabRouter);

app.listen(port, () => console.log(`Server listening at port ${port}`));
