const deleteOne = require("../../controllers/promos/01 deleteOne")


const deletePromoHandler = async (req, res) => {
  const {nombre} = req.params;

  try {
    
       const borrarPromo = await deleteOne(nombre);

    res.status(200).json(borrarPromo);
  } 
  
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports =  deletePromoHandler;
