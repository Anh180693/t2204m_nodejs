const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port,function (){
    console.log("Sever is running...");
})

const mysql = require("mysql");
const  conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "t2204m",
        port: 3306
    }
);

app.get("/",function (req,res){
    res.send("Hello world!");
})

app.get("/bong-da",function (req,res){
    res.send("Bóng đá 24h");
})

// api danh sach category

app.get("/api-get-category",function (reg,res){
    const sql_txt = "select * from category";
    conn.query(sql_txt,function (err,data) {
        if(err) res.send("Error");
        else res.send(data);
    })
})

app.get("/api-get-product",function (reg,res) {
    const sql_1 = "select * from product";
    conn.query(sql_1,function (err,data) {
        if(err) res.send("Error");
        else res.send(data);
    })
})

app.get("/api-get-product1",function (reg,res) {
    const sql_2 = "select product.id,product.name,product.price,"+
        "category.name as category_name from product left join "+
        "category on product.categoryId = category.id;";
    conn.query(sql_2,function (err,data) {
        if(err) res.send("Error");
        else res.send(data);
    })
})