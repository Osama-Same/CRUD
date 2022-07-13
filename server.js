const express = require("express");
const cors = require("cors");
const router = require("./Router/Router")
require("./Connection/Database");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(router)

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

