const createHaircutHandler = require ("../handlers/admin/01 createHaircutHandler")
const getHaircutsHandler = require ("../handlers/admin/02 getHaircutsHandler")
const deleteHaircutHandler = require ("../handlers/admin/03 deleteHaircutHandler")
const updateHaircutHandler = require ("../handlers/admin/04 updateHaircutHandler")

const { Router } = require("express");


const adminRouter=Router();


adminRouter.get("/haircut",getHaircutsHandler)
adminRouter.post("/haircut",createHaircutHandler)
adminRouter.delete("/haircut:id",deleteHaircutHandler)
adminRouter.put("/haircut",updateHaircutHandler)
module.exports = adminRouter;