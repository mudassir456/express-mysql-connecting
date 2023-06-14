let express = require("express")
let app=express();
let port = 4000;
let path = require("path");
let products = require("./models/model")

app.use(express.urlencoded())
app.use(express.json())
app.set("view engine","ejs"); 

let productRouter = require("./routes/product")
let shopRouter = require("./routes/shop")

app.use("/api/product",productRouter) 
app.use("/api/shop",shopRouter)
app.use(function(req,res){
    res.send("no route found")
})

app.listen(port)