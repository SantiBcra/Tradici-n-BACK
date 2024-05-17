const { Count} = require("../../db");


const postCount= async (date) => {
        try {
          
 
            const newCount= await Count.create({date});
            return newCount;
            
          } catch (error) {
            console.error("Error en postCountController:", error);
            throw error; 
          }
      };
      
      module.exports = postCount;
      
