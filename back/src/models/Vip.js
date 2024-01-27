const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Vip",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      client: {
        type: DataTypes.STRING,
      },
      initialDay: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      dates: {
        type: DataTypes.INTEGER,
        defaultValue: 4
      },
      status: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    
  );
};
