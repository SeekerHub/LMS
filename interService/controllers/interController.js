const {Interaction} = require('../config/db');

exports.createInteraction = async (req, res) => {
  const { lead_id, date, type, details } = req.body;
  try {
    const newInteraction = await Interaction.create({ lead_id, date, type, details });
    res.status(201).json(newInteraction);
  } catch (error) {
    res.status(500).json({ error: 'Error creating interaction' });
  }
};

// Get all leads
exports.getAllInteraction = async (req, res) => {
  try {
    const interactions = await Interaction.findAll();
    res.status(200).json(interactions);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching interactions' });
  }
};

// Get lead by ID
exports.getLeadById = async (req, res) => {
  const { leadId } = req.params;
  try {
    const interactions = await Interaction.findAll({ where: { lead_id: leadId } });
    res.status(200).json(interactions);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching interactions' });
  }
};

// Update lead
exports.updateInterLead = async (req, res) => {
  const { id } = req.params;
  const { date, type, details } = req.body;
  try {
    const interaction = await Interaction.findByPk(id);
    if (!interaction) {
      return res.status(404).json({ error: 'Interaction not found' });
    }
    interaction.date = date || interaction.date;
    interaction.type = type || interaction.type;
    interaction.details = details || interaction.details;
    await interaction.save();
    res.status(200).json(interaction);
  } catch (error) {
    res.status(500).json({ error: 'Error updating interaction' });
  }
};

// Delete lead
exports.deleteInterLead = async (req, res) => {
  const { id } = req.params;
  try {
    const interaction = await Interaction.findByPk(id);
    if (!interaction) {
      return res.status(404).json({ error: 'Interaction not found' });
    }
    await interaction.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting interaction' });
  }
};
