
const updateHaircut = require("../../controllers/admin/04 updateDate");



const updateHaircutHandler = async (req, res) =>{
    const { identifier, peluquero, pago, metodo } = req.body;;
    console.log(identifier)
try{
    const dataToDelete = await updateHaircut(identifier, peluquero, pago, metodo)
    res.status(200).json(dataToDelete)
}
catch(error){
    res.status(400).json({ error: error.message });
}

}
module.exports = updateHaircutHandler;