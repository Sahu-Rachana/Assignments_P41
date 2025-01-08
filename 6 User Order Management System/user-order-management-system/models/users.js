const connection = require('../config/dbConnect'); 

exports.getUser = (cb) => {
    connection.query('SELECT * FROM user WHERE role = (SELECT id FROM role WHERE role = "user") AND is_deleted = false', cb); 
};

exports.getUserById = (id, cb) => {
    connection.query('SELECT * FROM user WHERE id = ? AND role = (SELECT id FROM role WHERE role = "user") AND is_deleted = false', [id], cb);
};

exports.getRoleId = (role, cb) => {
    connection.query('SELECT id FROM role WHERE role = ?', [role], cb);
};
exports.addUser = (newUser, cb) => {
    connection.query('INSERT INTO user SET ? ', newUser, cb);
};

exports.getRoleById = (id, cb) => {
    connection.query('SELECT role FROM role WHERE id = (SELECT role FROM user WHERE id = ?)', [id], cb);
};
exports.updateUser = (id, updatedUser, cb) => {
    connection.query('UPDATE user SET ? WHERE id = ? AND role = (SELECT id FROM role WHERE role = "user") AND is_deleted = false', [updatedUser, id], cb);
};

exports.deleteUser = (id, cb) => {
    connection.query('UPDATE user SET is_deleted = true WHERE id = ? AND role = (SELECT id FROM role WHERE role = "user") AND is_deleted = false', [id], cb);
    //connection.query('DELETE FROM user WHERE id = ? AND role = (SELECT id FROM role WHERE role = "user") AND is_deleted = false', [id], cb);
}; 
