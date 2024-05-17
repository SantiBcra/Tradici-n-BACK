const { Haircut} = require("../../db");



const getHaircuts = async (id) => {

  
  const toDeleteHaircut = await Haircut.destroy({ where: { id : id } });

 
  return toDeleteHaircut;
};

module.exports = getHaircuts;

