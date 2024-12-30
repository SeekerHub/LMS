module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Required field
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contact_info: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Contact.associate = (models) => {
    // A Contact belongs to a Lead
    Contact.belongsTo(models.Lead, {
      foreignKey: 'leadId',
      as: 'lead',
    });
  };

  return Contact;
};
