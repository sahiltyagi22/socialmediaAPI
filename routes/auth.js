const router = require("express").Router();
const express = require('express')
const Users = require("../models/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var bodyParser = require('body-parser');

const app = express();

router.use(bodyParser.urlencoded({extended :true}))
router.use(bodyParser.json())

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
      res.sendStatus(200).json(newUser);
    });
  } catch (error) {
    console.log(error);
  }
});


// LOGIN route
router.post("/login" , async (req,res)=>{
try {
  const user = await Users.findOne({email : req.body.email})
!user && res.status(404).json("user not found")
} catch (error) {
  console.log(error);
}
})

module.exports = router;
