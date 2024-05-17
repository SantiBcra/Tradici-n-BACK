
const deleteHaircut = require("../../controllers/admin/03 deleteDate");



const deleteHaircutHandler = async (req, res) =>{
    const {id} = req.params;;
   
try{
    const dataToDelete = await deleteHaircut(id)
    res.status(200).json(dataToDelete)
}
catch(error){
    res.status(400).json({ error: error.message });
}

}
module.exports = deleteHaircutHandler;