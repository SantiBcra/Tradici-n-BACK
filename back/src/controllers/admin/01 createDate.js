const { Haircut, Count } = require("../../db");


const postHaircut = async (peluquero ,pago ,metodo ) => {
        try {
          
          var today = new Date();
var options = { timeZone: 'America/Argentina/Buenos_Aires' };
var time = today.toLocaleTimeString('en-US', options);


var today = new Date();
var options = { timeZone: 'America/Argentina/Buenos_Aires' };
var fecha = today.toLocaleDateString('en-US', options);

            const newHaircut = await Haircut.create({ peluquero ,pago ,metodo,fecha,time });


        
            const cuenta = await Count.findByPk("40bbd294-b223-4a9b-818b-3472f1016b29");


          

await cuenta.increment('count', { by: 1 });
          
          
            return newHaircut;
            
          } catch (error) {
            console.error("Error en postHaircutController:", error);
            throw error; 
          }
      };
      
      module.exports = postHaircut;
      
module.exports = postHaircut