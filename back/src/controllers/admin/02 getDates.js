const { Haircut} = require("../../db");



const getHaircuts = async () => {
  const allHaircuts = await Haircut.findAll();

 
  return allHaircuts;
};

module.exports = getHaircuts;

