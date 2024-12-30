const express = require('express');
const leadController = require('../controllers/leadController');
const router = express.Router();

// CRUD operations for leads
router.post('/', leadController.createLead);
router.get('/', leadController.getAllLeads);
router.get('/:id', leadController.getLeadById);
router.put('/:id', leadController.updateLead);
router.delete('/:id', leadController.deleteLead);

module.exports = router;
