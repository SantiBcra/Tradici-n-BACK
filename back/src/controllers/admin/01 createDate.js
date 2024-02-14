const { Haircut } = require("../../db");


const postHaircut = async (peluquero ,pago ,metodo ) => {
        try {
          
          var today = new Date();
var options = { timeZone: 'America/Argentina/Buenos_Aires' };
var time = today.toLocaleTimeString('en-US', options);


var today = new Date();
var options = { timeZone: 'America/Argentina/Buenos_Aires' };
var fecha = today.toLocaleDateString('en-US', options);

            const newHaircut = await Haircut.create({ peluquero ,pago ,metodo,fecha,time });
            return newHaircut;
            
          } catch (error) {
            console.error("Error en postHaircutController:", error);
            throw error; 
          }
      };
      
      module.exports = postHaircut;
      
module.exports = postHaircut