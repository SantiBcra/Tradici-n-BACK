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
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      time: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
     
     
    },

    { timestamps: false }
    
  );
};
