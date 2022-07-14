const express = require("express");
const cors = require("cors");
const path = require("path")
const router = require("./Router/Router")
require("./Connection/Database");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(router)

app.use("/",(req,res)=>{
  res.sendFile(path.join(__dirname, '/client/build'));
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});




