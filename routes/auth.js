const router = require("express").Router();
const express = require('express')
const Users = require("../models/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

router.post("/register", async (req, res) => {
  try {
    //  generating hash password
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        console.log(req.body.password);
      const newUser = new Users({
        username: req.body.username,
        email: req.body.email,
        password: hash,
      });
      // saving info
      await newUser.save();
      res.send("all okay");
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
