const postPromo = require("../../controllers/promos/02 createNew")


const createPromoHandler = async (req, res) => {
  const {client  } = req.body;

  try {
    
       const newPromo = await postPromo(client  );

    res.status(200).json(newPromo);
  } 
  
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports =  createPromoHandler;
