
const updateCount = require("../../controllers/count/02 editCount");



const updateHaircutHandler = async (req, res) =>{
const {identifier, newNumber,date} = req.body
try{
    const dataToDelete = await updateCount(identifier, newNumber,date)
    res.status(200).json(dataToDelete)
}
catch(error){
    res.status(400).json({ error: error.message });
}

}
module.exports = updateHaircutHandler;