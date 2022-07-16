const express = require("express");
const cors = require("cors");
const router = require("./Router/Router")
require("./Connection/Database");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(router)

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});




