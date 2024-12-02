const morgan = require('morgan')
const cors = require('cors')
const cookieparser = require('cookie-parser')
const express = require('express')
const authRoutes = require('./routes/authRoutes')


const config = require('./utils/config')

const app = express()

app.use(cors())
app.use(cookieparser())
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use('/api/v1/auth', authRoutes) 


//pending
// app.use('/', passwordResetRoutes);


app.get('/', (req,res)=>{
    res.send("Welcome to Bayer health Provider App")
})

module.exports = app