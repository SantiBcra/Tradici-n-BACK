const postCount = require("../../controllers/count/03 createCount")


const createCountHandler = async (req, res) => {
  
const {date} = req.body
  try {
    
       const newField = await postCount(date);

    res.status(200).json(newField);
  } 
  
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports =  createCountHandler;
