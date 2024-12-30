const Contact = require('../config/db');

// Create a new contact
exports.createContact = async (req, res) => {
  try {
    const { name, role, phone, email, leadId } = req.body;
    const newContact = await Contact.create({ name, role, phone, email, leadId });
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create contact.' });
  }
};

// Get contacts by lead ID
exports.getContactsByLeadId = async (req, res) => {
  const { leadId } = req.params;
  try {
    const contacts = await Contact.findAll({ where: { leadId } });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts.' });
  }
};

// Get contact by ID
exports.getContactById = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findByPk(id);
    if (contact) {
      res.status(200).json(contact);
    } else {
      res.status(404).json({ error: 'Contact not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contact.' });
  }
};

// Update contact
exports.updateContact = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Contact.update(req.body, { where: { id } });
    if (updated) {
      const updatedContact = await Contact.findByPk(id);
      res.status(200).json(updatedContact);
    } else {
      res.status(404).json({ error: 'Contact not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update contact.' });
  }
};

// Delete contact
exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Contact.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Contact not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete contact.' });
  }
};
