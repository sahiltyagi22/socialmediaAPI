const express = require('express')
const app = express()
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const dotenv = require('dotenv')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')

dotenv.config()

mongoose.connect(process.env.mongo_URL, {useNewUrlParser : true , useUnifiedTopology : true}).then(()=>{
    console.log("db is connected");
}).catch((err)=>{
    console.log(err);
})


app.use(express.json())
app.use(helmet())
app.use(morgan('common'))
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)


app.get('/', (req,res)=>{
    res.send("hello there")
})

app.get('/users', (req,res)=>{
    res.send("welcome to the users page")
})

app.listen(3000, ()=>{
    console.log("backend server is running");
})