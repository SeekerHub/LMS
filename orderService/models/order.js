module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
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
  
    
  
    return Order;
  };
  