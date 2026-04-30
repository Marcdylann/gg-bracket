const express = require('express');
const router = express.Router();
const { getAllMatches, updateScore, updateStatus } = require('../controllers/matchController');
const { protect } = require('../middleware/authMiddleware');

router.put('/:id/status', protect, updateStatus);
router.put('/:id', protect, updateScore);
router.get('/', getAllMatches);

module.exports = router;