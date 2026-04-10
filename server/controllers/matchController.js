const pool = require('../config/db');

// GET /api/matches
const getAllMatches = async (req, res) => {
  try {
    const result = await pool.query(`
  SELECT 
    m.id,
    m.round,
    m.status,
    m.score_team_a,
    m.score_team_b,
    t1.name AS team1_name,
    t2.name AS team2_name
  FROM matches m
  LEFT JOIN teams t1 ON m.team_a_id = t1.id
  LEFT JOIN teams t2 ON m.team_b_id = t2.id
  ORDER BY m.round ASC
`);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching matches:', error);
    res.status(500).json({ message: 'Server error fetching matches' });
  }
};

module.exports = { getAllMatches };