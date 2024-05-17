const { Router } = require("express");
const {
  countRouter,
  adminRouter,
  promoRouter
 
} = require("./index");

const router = Router();

router.use("/admin", adminRouter);
router.use("/promo", promoRouter);
router.use("/count", countRouter);

module.exports = router;
