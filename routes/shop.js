let {Router} = require("express")
let router = Router()
let path = require("path")
let products = require("../models/model")

let controllershop = require("../controllers/shop")

router.get("/", controllershop.get)


  module.exports = router