module.exports = (sequelize, DataTypes) => {
    const Performance = sequelize.define('Performance', {
      lead_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      }
    });
  
    
  
    return Performance;
  };
  