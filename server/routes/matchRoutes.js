const express = require('express');
const router = express.Router();
const { getAllMatches } = require('../controllers/matchController');
const { protect } = require('../middleware/authMiddleware');

// Public route — viewers can see matches
router.get('/', getAllMatches);

module.exports = router;