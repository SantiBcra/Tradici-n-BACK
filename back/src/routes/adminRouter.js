const createHaircutHandler = require ("../handlers/admin/01 createHaircutHandler")
const getHaircutsHandler = require ("../handlers/admin/02 getHaircutsHandler")

const { Router } = require("express");


const adminRouter=Router();


adminRouter.get("/haircut",getHaircutsHandler)
adminRouter.post("/haircut",createHaircutHandler)


module.exports = adminRouter;