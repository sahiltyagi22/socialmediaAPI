const router = require('express').Router()
const Users = require('../models/db')

router.get('/register', async (req,res)=>{
    const newUser = await new Users ({
        name : "sahil Tyagi",
        email : "sahiltyagi@121.com",
        password : 12121212
    })

    await newUser.save()
    res.send("ok")
})


module.exports = router