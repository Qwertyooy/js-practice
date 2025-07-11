const express = require('express')
const mysql = require('mysql')
const dotenv = require('dotenv')
const path = require('path');

dotenv.config({path:'./.env'});


const app = express()

const conn = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
})

app.use(express.static(path.join(__dirname, 'public')));

conn.connect((err)=>{
    if (err) throw err
    console.log("mysql connected")
})


app.listen(3000, ()=> {
    console.log("server on")
});


