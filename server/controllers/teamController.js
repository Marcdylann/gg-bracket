const pool = require('../config/db');

// GET /api/teams
const getAllTeams = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM teams ORDER BY name ASC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching teams:', error);
    res.status(500).json({ message: 'Server error fetching teams' });
  }
  const result = await pool.query(
  'SELECT * FROM teams ORDER BY name ASC'
);
console.log('Teams found:', result.rows); // add this line
res.json(result.rows);
};

module.exports = { getAllTeams };