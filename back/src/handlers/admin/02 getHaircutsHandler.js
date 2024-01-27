const getHaircuts = require("../../controllers/admin/02 getDates");


const getHaircutsHandler = async (req, res) => {
  try {
    const allHaircuts = await getHaircuts();
    res.status(200).json(allHaircuts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getHaircutsHandler;
