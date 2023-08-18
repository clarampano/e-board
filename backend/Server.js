const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const multer = require('multer');
const path = require('path');
//const multer= require('multer');
//const path = require('path');
app.use(cors());
app.use(express.json());
app.use(express.static('public'))
//file uplaod management

const storage = multer.diskStorage({
    distination: (req, file, cb) => {
      cb(null , '/public/images')
    },
    filename: (req, file, cb) =>{
        cb(null, file.fieldname + Date.now() + ".jpg");

    }
})
const upload= multer({
    storage: storage
})

// Ends here

const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "noticeboard"
})
//create APIs here... 


// show user API
app.get('/student', (req, res) => {
   const sql = "SELECT * FROM user";
    db.query(sql, (err, data) =>{
        if(err) return res.json("error");
        return res.json(data);
    })
})
//Ends here

//Insert user API
app.post('/create', (req ,res) =>{
    const sql = "INSERT INTO `user` (`Firstname`, `Lastname`, `Email`, `Password`, `Department`, `Title`, `Role`, `Telphone`) VALUES(?)";
    const values=[
        req.body.fn,
        req.body.ln,
        req.body.em,
        req.body.pa,
        req.body.de,
        req.body.ti,
        req.body.ro,
        req.body.te
    ]
    
    db.query(sql,[values], (err, data) =>{
        
        if(err) return res.json("error");
        return  res.json(data);
    })
})


//Ends Here

//Update API
app.put('/update/:id', (req, res)=>{
    const sql= "UPDATE `user` SET `Firstname`= ?, `Lastname`= ?, `Email`= ?, `Password`= ?, `Department`= ?, `Title`= ?, `Role`= ?, `Telphone`= ? WHERE `user`.`Id` = ?";
    const values=[
        req.body.fn,
        req.body.ln,
        req.body.em,
        req.body.pa,
        req.body.de,
        req.body.ti,
        req.body.ro,
        req.body.te
    ]
    const id=req.params.id;
    db.query(sql, [...values, id], (err, data) =>{
        if(err) return res.json("error");
        return res.json(data);
    })
})
//Ends

//Delete API
app.delete('/remove/:id',(req, res) =>{
    const sql=" DELETE from `user` WHERE `user`.`Id` = ?"; 
    const id=req.params.id;
    db.query(sql, [id], (err, data) =>{
        if(err) return res.json("error");
        return res.json(data);
    })
})
//ends here
//Upload Image 
app.post('/upload',upload.single('image'), (req, res) =>{
    console.log(req.file.filename);
})

app.listen(8081,() => {
    console.log("Listening");
})