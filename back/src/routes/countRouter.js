const getCountHandler = require("../handlers/count/01 getCountHandler")
const editCountHandler = require("../handlers/count/02 editCountHandler")
const postCountHandler = require("../handlers/count/03 postCountHandler")

const { Router } = require("express");


const countRouter=Router();


countRouter.get("/",getCountHandler)
countRouter.post("/",postCountHandler)
countRouter.put("/",editCountHandler)

module.exports = countRouter;