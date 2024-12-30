module.exports = (sequelize, DataTypes) => {
    const Lead = sequelize.define('Lead', {
      restaurant_name: {
        type: DataTypes.STRING,
        allowNull: false, // Required field
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lead_source: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'New', // Default status when a lead is created
      },
    });
  
    Lead.associate = (models) => {
      // A Lead can have many Contacts (POCs)
      Lead.hasMany(models.Contact, {
        foreignKey: 'leadId',
        as: 'contacts',
      });
      // A Lead can have many Interactions
      Lead.hasMany(models.Interaction, {
        foreignKey: 'leadId',
        as: 'interactions',
      });
      // A Lead can have many Calls
      Lead.hasMany(models.Call, {
        foreignKey: 'leadId',
        as: 'calls',
      });
    };
  
    return Lead;
  };
  