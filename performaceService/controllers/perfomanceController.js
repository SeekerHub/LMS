const {Performance} = require('../config/db');

// Create a new lead



exports.createPerformance = async (req, res) => {
  const { lead_id, orders_count, avg_order_value, performance_score } = req.body;
  try {
    const newPerformance = await Performance.create({ lead_id, orders_count, avg_order_value, performance_score });
    res.status(201).json(newPerformance);
  } catch (error) {
    res.status(500).json({ error: 'Error creating performance record' });
  }
}
// Get all leads
exports.getAllPerformace = async (req, res) => {
  try {
    const performances = await Performance.findAll();
    res.status(200).json(performances);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching performances' });
  }
};

// Get lead by ID
exports.getPerformaceLeadById = async (req, res) => {
  const { leadId } = req.params;
  try {
    const performance = await Performance.findOne({ where: { lead_id: leadId } });
    res.status(200).json(performance);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching performance' });
  }
};

// Update lead
exports.updatePerformance = async (req, res) => {
  const { id } = req.params;
  const { orders_count, avg_order_value, performance_score } = req.body;
  try {
    const performance = await Performance.findByPk(id);
    if (!performance) {
      return res.status(404).json({ error: 'Performance record not found' });
    }
    performance.orders_count = orders_count || performance.orders_count;
    performance.avg_order_value = avg_order_value || performance.avg_order_value;
    performance.performance_score = performance_score || performance.performance_score;
    await performance.save();
    res.status(200).json(performance);
  } catch (error) {
    res.status(500).json({ error: 'Error updating performance record' });
  }
};

// Delete lead
exports.deletPerformance = async (req, res) => {
  const { id } = req.params;
  try {
    const performance = await Performance.findByPk(id);
    if (!performance) {
      return res.status(404).json({ error: 'Performance record not found' });
    }
    await performance.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting performance record' });
  }
};
