const express = require("express");
const app = express(); 
const mysql = require("mysql");
const cors = require("cors");
const PORT = 4000;  

app.use(express.json()); 
app.use(cors()); 

const db = mysql.createPool({
    host: 'localhost', 
    user: 'root', 
    password: 'root', 
    database: 'todoapp'
})

app.listen(PORT, () => {
   console.log(`localhost:${PORT}`); 
   console.log("server started..."); 
}) 

app.post('/insert', (req,res) => {
   const name = req.body.name;  
   const INSERT = "INSERT INTO `todoapp` (`id`, `name`) VALUES (NULL, ?);"

   db.query(INSERT, [name], (err, res) => {
       if(err) {
           throw err; 
       } 
       console.log(res); 
   }) 
   res.end("All right"); 
}) 

app.get('/select', (req,res) => {
   const SELECT = "SELECT * FROM `todoapp`;"
   db.query(SELECT, (err, result) => {
       if(err) {
           throw err; 
       }
       res.send(result); 
   })
})