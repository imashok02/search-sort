const express = require("express");

const app = express();

const searchRoute = require("./routes/search");
const error = require("./controllers/error");

app.use(searchRoute);
app.use(error.get404);

app.listen(8000);
