const createPromoHandler = require ("../handlers/promos/02 createNewPromo")
const getPromoHandler = require ("../handlers/promos/03 getAll")
const deletePromoHandler = require("../handlers/promos/01 deleteOne")

const { Router } = require("express");


const promoRouter=Router();

promoRouter.get("/",getPromoHandler)
promoRouter.post("/",createPromoHandler)
promoRouter.delete("/:nombre",deletePromoHandler)

module.exports = promoRouter;