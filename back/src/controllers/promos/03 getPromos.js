const {   Vip } = require("../../db");



const getPromo = async () => {
  const allPromo = await Vip.findAll();

 
  return allPromo;
};

module.exports = getPromo;

