const {Order} = require('../config/db');

// Create a new lead



exports.createOrder = async (req, res) => {
  const { lead_id, order_date, amount } = req.body;
  try {
    const newOrder = await Order.create({ lead_id, order_date, amount });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Error creating order' });
  }
}
// Get all leads
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching orders' });
  }
};

// Get lead by ID
exports.getOrderLeadById = async (req, res) => {
  const { leadId } = req.params;
  try {
    const orders = await Order.findAll({ where: { lead_id: leadId } });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching orders' });
  }
};

// Update lead
exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const { order_date, amount } = req.body;
  try {
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    order.order_date = order_date || order.order_date;
    order.amount = amount || order.amount;
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error updating order' });
  }
};

// Delete lead
exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    await order.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting order' });
  }
};
