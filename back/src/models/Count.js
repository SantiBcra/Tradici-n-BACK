const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Count",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      date: {
        type: DataTypes.STRING,
        allowNull: false,
      
      },
     
     
    },

    { timestamps: false }
    
  );
};
