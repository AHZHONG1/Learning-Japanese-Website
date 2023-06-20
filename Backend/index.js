const express = require("express");

const app = express();

const port = 5000;

app.listen(port, () => console.log(`Server listening at port ${port}`));

const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(
    process.env.MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

mongoose.connection.on('connected', function(){console.log("connection, successful")});

app.get("/api", (req, res) => {
    res.send("Hello World from Express");
});

