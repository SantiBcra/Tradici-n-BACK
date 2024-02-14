const { Vip } = require("../../db");

const postPromo = async (client ) => {
        try {
         

          var today = new Date();
          var options = { timeZone: 'America/Argentina/Buenos_Aires' };
          var initialDay = today.toLocaleDateString('en-US', options);


            const newPromo = await Vip.create({client, initialDay });
            return newPromo;
            
          } catch (error) {
            console.error("Error en postPromoController:", error);
            throw error; 
          }
      };
      
      
      
module.exports = postPromo