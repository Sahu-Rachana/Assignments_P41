const connection = require('../config/dbConnect'); 

exports.getManager = (cb) => {
    connection.query('SELECT * FROM user WHERE role = (SELECT id FROM role WHERE role = "manager") AND is_deleted = false', cb);
};

exports.getManagerById = (id, cb) => {
    connection.query('SELECT * FROM user WHERE id = ? AND role = (SELECT id FROM role WHERE role = "manager") AND is_deleted = false', [id], cb);
};

exports.getRoleId = (role, cb) => {
    connection.query('SELECT id FROM role WHERE role = ?', [role], cb);
};
exports.addManager = (newManager, cb) => {
    connection.query('INSERT INTO user SET ? ', newManager, cb);
};

exports.getRoleById = (id, cb) => {
    connection.query('SELECT role FROM role WHERE id = (SELECT role FROM user WHERE id = ?)', [id], cb);
};
exports.updateManager = (id, updatedManager, cb) => {
    connection.query('UPDATE user SET ? WHERE id = ? AND role = (SELECT id FROM role WHERE role = "manager") AND is_deleted = false', [updatedManager, id], cb);
};

exports.deleteManager = (id, cb) => {
    connection.query('UPDATE user SET is_deleted = true WHERE id = ? AND role = (SELECT id FROM role WHERE role = "manager") AND is_deleted = false', [id], cb);
    //connection.query('DELETE FROM user WHERE id = ? AND role = (SELECT id FROM role WHERE role = "manager") AND is_deleted = "false"', [id], cb);
}; 
