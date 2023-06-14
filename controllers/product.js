let path = require("path")
let connection = require("../models/model")

module.exports = {
    get :async function(req,res){
       try {
        let db= await connection();
        let [products ]=await db.execute("SELECT * FROM product");
        console.log(products)
        res.render(path.join(__dirname, "../views", "index"), { products :products })
      } catch(error){
        console.log(error);
        res.send("error found please check it")
      }
    }, getone :async function(req,res){
      try {
       let {productId} = req.params;
       let db= await connection();
       let [products ]=await db.execute(`select * from product where id = ${productId}`);
       console.log(products)
       res.send({products })
     } catch(error){
       console.log(error);
       res.send("error found please check it")
     }
   },
    post :async function (req, res) {
      try {
        let { name, price } = req.body;
        let date = new Date()
        let db = await connection();
        await db.execute(`INSERT INTO product (name,price,createdAt,updatedAt) VALUES ('${name}',${price},'${date.toISOString().slice(0,10)}','${date.toISOString().slice(0,10)}')`)
        res.send("post method successfully done")
      } catch (err){
        console.log(err);
        res.send("error occurs")
      }
      },
      put :async function (req, res) { 
        try{
          let db = await connection()
        let { name, price } = req.body;
        let { id } = req.params;
        id = Number(id)
        await db.execute(`UPDATE product set name ='${name}',price =${price} WHERE ID = ${id}`)
        res.send("put method done")
      }catch (err) {
      console.log(err);
    res.send("error")}
      },
      delete : async function (req, res) {
    try{
      let db = await connection()
      let { name, price } = req.body;
      let { id } = req.params;
      id = Number(id);
      await db.execute(`DELETE FROM product WHERE  id = ${id}`)
      res.send("delete mthod done")
    }catch (err){
      console.log(err)
      res.send("error")
    }
      } 
}