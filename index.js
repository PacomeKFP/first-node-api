const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
require("./models/dbconfig.js");
const postsRoutes = require("./routes/postsController");



app.use(bodyParser.json())
app.use(cors())
app.use("/posts", postsRoutes)

app.listen(5500, () => console.log("Application  running"))
