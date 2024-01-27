const { Vip } = require("../../db");

const deleteOne = async (nombre ) => {
  const numeroActual = await Vip.findByPk(nombre)
        try {
         
          
          if(numeroActual.dates>0){


            const numeroNuevo = numeroActual.dates - 1
            const objetoActualizado = await numeroActual.update(
              { dates : numeroNuevo  },
              );
  
          return objetoActualizado
              

          }

          else return ("se borro todo de este")



        
          } catch (error) {
            console.error("Error en controlador de delete", error);
            throw error; 
          }
      };
      

      
module.exports = deleteOne