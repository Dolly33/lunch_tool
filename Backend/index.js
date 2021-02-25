const express = require("express");
const app = express();
const mysql = require("mysql");


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "school_canteen",
});

app.get("/meals", (req, res)=>{
    const sql = "select * from meals";
    db.query(sql, (err, result)=>{
        if(err) console.log(err);
        else res.send(result);
    })
  
    });

    app.post("/api/insertmeals", (req, res)=>{
        const sqlinsert = "insert into meals values ('tuesday', 'banku', 'fufu', 'yam')";
        db.query(sqlinsert, (err, result)=>{
            if(err) console.log(err);
            else res.send(result);
        })
      
        });
    
     

app.listen(3001, ()=>{
    console.log("running on port 3001");
})