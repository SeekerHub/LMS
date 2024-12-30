const express = require('express');
const contactController = require('../controllers/contactController');
const router = express.Router();

// CRUD operations for contacts
router.post('/', contactController.createContact);
router.get('/:leadId', contactController.getContactsByLeadId);
router.get('/:id', contactController.getContactById);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);

module.exports = router;
