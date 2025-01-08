const connection = require('../config/dbConnect'); 

exports.getAdmin = (cb) => {
    connection.query('SELECT * FROM user WHERE role = (SELECT id FROM role WHERE role = "admin") AND is_deleted = false', cb); 
};

exports.getAdminById = (id, cb) => {
    connection.query('SELECT * FROM user WHERE id = ? AND role = (SELECT id FROM role WHERE role = "admin") AND is_deleted = false', [id], cb);
};

exports.getRoleId = (role, cb) => {
    connection.query('SELECT id FROM role WHERE role = ?', [role], cb);
};
exports.addAdmin = (newAdmin, cb) => {
    connection.query('INSERT INTO user SET ? ', newAdmin, cb);
};

exports.getRoleById = (id, cb) => {
    connection.query('SELECT role FROM role WHERE id = (SELECT role FROM user WHERE id = ?)', [id], cb);
};
exports.updateAdmin = (id, updatedAdmin, cb) => {
    connection.query('UPDATE user SET ? WHERE id = ? AND role = (SELECT id FROM role WHERE role = "admin") AND is_deleted = false', [updatedAdmin, id], cb);
};

exports.deleteAdmin = (id, cb) => {
    connection.query('UPDATE user SET is_deleted = true WHERE id = ? AND role = (SELECT id FROM role WHERE role = "admin") AND is_deleted = false', [id], cb);
    //connection.query('DELETE FROM user WHERE id = ? AND role = (SELECT id FROM role WHERE role = "admin") AND is_deleted = "false"', [id], cb);
}; 


