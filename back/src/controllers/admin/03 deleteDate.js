const { Haircut,Count} = require("../../db");



const getHaircuts = async (id) => {

  
  const toDeleteHaircut = await Haircut.destroy({ where: { id : id } });
  const cuenta = await Count.findByPk("40bbd294-b223-4a9b-818b-3472f1016b29");


          

  await cuenta.decrement('count', { by: 1 });
          

 
  return toDeleteHaircut;
};

module.exports = getHaircuts;

