const { Router } = require("express");
const {
 
  adminRouter,
  promoRouter
 
} = require("./index");

const router = Router();

router.use("/admin", adminRouter);
router.use("/promo", promoRouter);


module.exports = router;
