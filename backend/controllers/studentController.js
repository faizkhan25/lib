const db = require('../config/database');

// Get all students with course information
const getAllStudents = (req, res) => {
  const query = `
    SELECT s.id, s.name, s.dob, s.mobileNo, s.email, s.course_id, c.name as course_name
    FROM student s
    JOIN courses c ON s.course_id = c.id
    ORDER BY s.id ASC
  `;
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching students:', err);
      return res.status(500).json({ error: 'Failed to fetch students' });
    }
    res.json(results);
  });
};

// Get student by ID
const getStudentById = (req, res) => {
  const { id } = req.params;
  const query = `
    SELECT s.id, s.name, s.dob, s.mobileNo, s.email, s.course_id, c.name as course_name
    FROM student s
    JOIN courses c ON s.course_id = c.id
    WHERE s.id = ?
  `;
  
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching student:', err);
      return res.status(500).json({ error: 'Failed to fetch student' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(results[0]);
  });
};

// Create new student
const createStudent = (req, res) => {
  const { name, dob, mobileNo, email, course_id } = req.body;
  
  if (!name || !dob || !mobileNo || !email || !course_id) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO student (name, dob, mobileNo, email, course_id) VALUES (?, ?, ?, ?, ?)';
  
  db.query(query, [name, dob, mobileNo, email, course_id], (err, result) => {
    if (err) {
      console.error('Error creating student:', err);
      return res.status(500).json({ error: 'Failed to create student' });
    }
    res.status(201).json({ 
      id: result.insertId, 
      name, 
      dob, 
      mobileNo, 
      email, 
      course_id 
    });
  });
};

// Update student
const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, dob, mobileNo, email, course_id } = req.body;
  
  if (!name || !dob || !mobileNo || !email || !course_id) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'UPDATE student SET name = ?, dob = ?, mobileNo = ?, email = ?, course_id = ? WHERE id = ?';
  
  db.query(query, [name, dob, mobileNo, email, course_id, id], (err, result) => {
    if (err) {
      console.error('Error updating student:', err);
      return res.status(500).json({ error: 'Failed to update student' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json({ id, name, dob, mobileNo, email, course_id });
  });
};

// Delete student
const deleteStudent = (req, res) => {
  const { id } = req.params;
  
  const query = 'DELETE FROM student WHERE id = ?';
  
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting student:', err);
      return res.status(500).json({ error: 'Failed to delete student' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json({ message: 'Student deleted successfully' });
  });
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};
