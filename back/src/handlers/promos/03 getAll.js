const getPromos = require("../../controllers//promos/03 getPromos");


const getPromosHandler = async (req, res) => {
  try {
    const allPromos = await getPromos();
    res.status(200).json(allPromos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getPromosHandler ;
