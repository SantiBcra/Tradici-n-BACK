const { Haircut} = require("../../db");



const getHaircuts = async (identifier, peluquero, pago, metodo) => {

  
  const toUpdateHaircut = await Haircut.update({ peluquero: peluquero, pago: pago, metodo: metodo }, { where: { id: identifier } });

 
  
};

module.exports = getHaircuts;

