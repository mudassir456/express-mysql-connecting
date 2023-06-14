let { Router } = require("express")
let router = Router()
// let path = require("path");
// let products = require("../models/model")  

let controllerproduct = require("../controllers/product")

router.get("/",controllerproduct.get)
router.get("/:productId",controllerproduct.getone)

router.post("/",controllerproduct.post)

router.put("/:id", controllerproduct.put)

router.delete("/:id", controllerproduct.delete)

module.exports = router