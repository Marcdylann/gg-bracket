const db = require('../config/db');

exports.getAllTeams = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM teams ORDER BY name ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};