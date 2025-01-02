const connection = require('../config/dbConnect'); 

exports.getUser = (cb) => {
    connection.query('SELECT * FROM users', cb); //cb()
};

exports.getUserById = (id, cb) => {
    connection.query('SELECT * FROM users WHERE userId = ?', [id], cb);
};

exports.addUser = (newUser, cb) => {
    connection.query('INSERT INTO users SET ?', newUser, cb);
};

exports.updateUser = (id, updatedUser, cb) => {
    connection.query('UPDATE users SET ? WHERE userId = ?', [updatedUser, id], cb);
};

exports.deleteUser = (id, cb) => {
    connection.query('DELETE FROM users WHERE userId = ?', [id], cb);
}; 
