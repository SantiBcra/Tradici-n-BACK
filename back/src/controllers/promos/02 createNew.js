const { Vip } = require("../../db");

const postPromo = async (client ) => {
        try {
         
            const newPromo = await Vip.create({client });
            return newPromo;
            
          } catch (error) {
            console.error("Error en postPromoController:", error);
            throw error; 
          }
      };
      
      
      
module.exports = postPromo