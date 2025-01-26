const db = require('../databaseConnection'); 

const createUser = (email, password, role, callback) => {
  const query = 'INSERT INTO users (email, password, role) VALUES (?, ?, ?)';
  db.query(query, [email, password, role], callback);
};

const getUserByEmail = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err || results.length === 0) {
      callback(err, null);
    } else {
      callback(null, results[0]);
    }
  });
};

module.exports = { createUser, getUserByEmail };
