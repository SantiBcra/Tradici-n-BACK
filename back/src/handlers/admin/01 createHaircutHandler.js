const postHaircut = require("../../controllers/admin/01 createDate");


const createHaircutHandler = async (req, res) => {
  const {peluquero ,pago ,metodo } = req.body;

  try {
    
       const newField = await postHaircut(peluquero ,pago ,metodo );

    res.status(200).json(newField);
  } 
  
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports =  createHaircutHandler;
