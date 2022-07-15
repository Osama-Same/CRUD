const express = require("express");
const connection = require("../Connection/Database");
const cloudinary = require("../Connection/cloudinary");
const app = express();
app.use(express.json());
require("dotenv").config();

// Get All Users

const getAllUser = (req, res) => {
  let sql = `select * from users`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};
// Get id User
const getIdUser = (req, res) => {
  const idUser = req.params.idUser
  let sql = `select * from users where idUser = '${idUser}'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

// Insert User
const insertUser = async (req, res) => {
  let Name = req.body.Name;
  let Email = req.body.Email;
  let Password = req.body.Password;
  let Phone = req.body.Phone;
  let Country = req.body.Country;
  let img = null;
  if (req.file) {
    img = await cloudinary.uploader.upload(req.file.path, {
      folder: "CRUD/User",
    });
  } else {
    res.json("No images Selected");
  }
  let Image = img.url;
  const sql = `INSERT INTO users (Name, Email, Password,Phone,Country,Image)
    VALUES ('${Name}', '${Email}', '${Password}','${Phone}','${Country}','${Image}')`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ err: "Email is invalid" });
      console.log({ err: "Email is invalid" });
      console.log(err);
    }
    if (result) {
      res.json({ result: "Sign Up successfully" });
    }
  });
};

// update id User
const updateIdUser = async (req, res) => {
  let Image = null;

  let idUser = req.params.idUser;
  let Name = req.body.Name;
  let Email = req.body.Email;
  let Password = req.body.Password;
  let Phone = req.body.Phone;
  let Country = req.body.Country;
  if (req.file) {
    Image = await cloudinary.uploader.upload(req.file.path, {
      folder: "CRUD/User",
    });
  } else {
    res.json("No images Selected");
  }
   Image = Image.url;

  let sql = `update users set 
      Name = '${Name}',
      Email = '${Email}',
      Password = '${Password}',
      Phone = '${Phone}',
      Country = '${Country}',
      Image = '${Image}'
      where idUser = '${idUser}'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ err: err });
      console.log(err);
    }else
    if (result) {
      res.json(result);
      console.log({ result: "successfully" });
    }
  });
};

// Delete User
const deleteUser = (req, res) => {
  const idUser = req.params.idUser;
  let sql = `delete from users where idUser='${idUser}'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json({ err: "error" });
      console.log(err);
    }
    if (result) {
      res.json("Delete Account");
      console.log(result);
    }
  });
};
module.exports = { getAllUser,getIdUser ,insertUser, updateIdUser, deleteUser };
