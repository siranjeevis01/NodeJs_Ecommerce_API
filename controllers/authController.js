const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db'); 


exports.signup = async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const query = `INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)`;
    await db.execute(query, [username, email, hashedPassword, role]);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const query = `SELECT * FROM users WHERE email = ?`;

    db.query(query, [email], (err, results) => {
      if (err) {
        console.error('Error during database query:', err);
        return res.status(500).json({ error: err.message });
      }

      console.log('Results:', results); 

      if (!results || results.length === 0) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const user = results[0];

      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.status(200).json({ token, message: 'Login successful' });
    });
  } catch (err) {
    console.error('Error during login:', err);
    return res.status(500).json({ error: err.message });
  }
};
