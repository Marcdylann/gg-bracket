const pool = require("../config/db");

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
    console.error("Error fetching matches:", error);
    res.status(500).json({ message: "Server error fetching matches" });
  }
};

const updateStatus = async (req, res) => {
  try {
    const {id} = req.params;
    const {status} = req.body;

    const result = await pool.query(
      "UPDATE matches SET status = $1 WHERE id = $2",
      [status, id]
    );
    res.json({ message: 'Status updated' })
  } catch (error) {
    console.error('Error updating status:', error);
    res.status(500).json({ message: 'Server error updating status' });
  }
}

const updateScore = async (req, res) => {
  try {

    const { id } = req.params;
  
    const { scoreA, scoreB } = req.body;

    const result = await pool.query(
      "UPDATE matches SET score_team_a = $1, score_team_b = $2 WHERE id = $3",
      [scoreA, scoreB, id],
    );
    res.json({ message: 'Score updated' })
  } catch (error) {
    console.error('Error updating scores:', error);
    res.status(500).json({ message: 'Server error updating scores' });
  }
};

module.exports = { getAllMatches, updateScore, updateStatus };
