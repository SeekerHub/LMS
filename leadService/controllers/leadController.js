const {Lead} = require('../config/db');

// Create a new lead
exports.createLead = async (req, res) => {
  try {
    const { restaurant_name, location, lead_source } = req.body;
    
    const newLead = await Lead.create({ restaurant_name, location, lead_source });
    
    res.status(201).json(newLead);
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ error: 'Failed to create lead.' });
  }
};

// Get all leads
exports.getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.findAll();
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch leads.' });
  }
};

// Get lead by ID
exports.getLeadById = async (req, res) => {
  const { id } = req.params;
  try {
    const lead = await Lead.findByPk(id);
    if (lead) {
      res.status(200).json(lead);
    } else {
      res.status(404).json({ error: 'Lead not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch lead.' });
  }
};

// Update lead
exports.updateLead = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Lead.update(req.body, { where: { id } });
    if (updated) {
      const updatedLead = await Lead.findByPk(id);
      res.status(200).json(updatedLead);
    } else {
      res.status(404).json({ error: 'Lead not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update lead.' });
  }
};

// Delete lead
exports.deleteLead = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Lead.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Lead not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete lead.' });
  }
};
