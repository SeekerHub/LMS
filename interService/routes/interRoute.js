const express = require('express');
const leadController = require('../controllers/interController');
const router = express.Router();

// CRUD operations for leads
router.post('/', leadController.createInteraction);
router.get('/', leadController.getAllInteraction);
router.get('/:leadId', leadController.getLeadById);
router.put('/:leadId', leadController.updateInterLead);
router.delete('/:leadId', leadController.deleteInterLead);

module.exports = router;
