const express = require('express');
const router = express.Router();
const { getAllMatches, updateScore } = require('../controllers/matchController');
const { protect } = require('../middleware/authMiddleware');


router.put('/:id', protect, updateScore);
router.get('/', getAllMatches);

module.exports = router;