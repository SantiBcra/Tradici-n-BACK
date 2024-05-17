const getCount = require("../../controllers/count/01 getCount")


const getCountHandle = async (req, res) => {
  
  try {
    
       const cuenta = await getCount();

    res.status(200).json(cuenta);
  } 
  
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports =  getCountHandle;
