const { Haircut } = require("../../db");

const postHaircut = async (peluquero ,pago ,metodo ) => {
        try {
          
          
            const newHaircut = await Haircut.create({ peluquero ,pago ,metodo });
            return newHaircut;
            
          } catch (error) {
            console.error("Error en postHaircutController:", error);
            throw error; 
          }
      };
      
      module.exports = postHaircut;
      
module.exports = postHaircut