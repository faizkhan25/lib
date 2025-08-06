const db = require('../config/database');

// Get all courses
const getAllCourses = (req, res) => {
  const query = 'SELECT * FROM courses ORDER BY id';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching courses:', err);
      return res.status(500).json({ error: 'Failed to fetch courses' });
    }
    res.json(results);
  });
};

module.exports = {
  getAllCourses
};
