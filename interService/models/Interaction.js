

module.exports = (sequelize, DataTypes) => {
  const Interaction = sequelize.define('Interactions', {
    lead_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
})
  return Interaction;
};
