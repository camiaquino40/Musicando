const express = require('express')
const Sequelize =require('sequelize')
const app = express()

const sequelize = new Sequelize('musicando', 'root','',{
    host: localhost,
    dialect:'mysql'
})



app.listen(3000, ()=>{
    console.log('Server up')
})