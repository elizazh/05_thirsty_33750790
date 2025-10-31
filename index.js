const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// routes
const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);

app.listen(port, () => console.log(`Thirsty Student 5a on ${port}`));
