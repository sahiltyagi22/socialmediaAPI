const router = require('express').Router()

router.get('/' , (req,res)=>{
    res.send("hello from API route")
})




module.exports = router