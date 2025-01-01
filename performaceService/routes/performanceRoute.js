const express = require('express');
const performaceController = require('../controllers/perfomanceController');
const router = express.Router();

// CRUD operations for performaces
router.post('/', performaceController.createPerformance);
router.get('/', performaceController.getAllPerformace);
router.get('/:id', performaceController.getPerformaceLeadById);
router.put('/:id', performaceController.updatePerformance);
router.delete('/:id', performaceController.deletPerformance);

module.exports = router;
