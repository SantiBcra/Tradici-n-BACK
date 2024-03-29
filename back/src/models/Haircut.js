const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Haircut",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      peluquero: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pago: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      metodo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     
     
    },

    { timestamps: false }
    
  );
};
