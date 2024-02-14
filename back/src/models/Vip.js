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
        type: DataTypes.STRING,
        allowNull: false,
      },
      dates: {
        type: DataTypes.INTEGER,
        defaultValue: 4
      },
      
    },
    { timestamps: false }
  );
};
