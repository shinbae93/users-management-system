const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 3000;

// log requests
app.use(morgan("tiny"));

// parse request to body-parser
app.use(express.urlencoded({ extended: true }));

// view engine
app.set("view engine", "ejs");

// load static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3000, () => console.log(`listening on port ${PORT}`));
