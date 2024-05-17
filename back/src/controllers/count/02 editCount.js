const { Count} = require("../../db");



const updateCount = async (identifier, newNumber,date) => {

  
  const toUpdateCount = await Count.update({ count: newNumber, date:date}, { where: { id: identifier } });
return toUpdateCount
 
  
};

module.exports = updateCount;

