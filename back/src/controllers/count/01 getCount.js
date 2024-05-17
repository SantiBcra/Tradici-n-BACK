const {Count} = require("../../db");



const getCount = async () => {
  const count = await Count.findAll();

 
  return count;
};

module.exports = getCount;

