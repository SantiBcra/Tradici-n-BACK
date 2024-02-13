const { Haircut } = require("../../db");

const postHaircut = async (peluquero ,pago ,metodo ) => {
        try {
          
          var today = new Date(),
          time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();


            const newHaircut = await Haircut.create({ peluquero ,pago ,metodo,time });
            return newHaircut;
            
          } catch (error) {
            console.error("Error en postHaircutController:", error);
            throw error; 
          }
      };
      
      module.exports = postHaircut;
      
module.exports = postHaircut