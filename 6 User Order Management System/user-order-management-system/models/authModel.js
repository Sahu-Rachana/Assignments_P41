const connection = require('../config/dbConnect'); 

exports.findRoleId = (role, cb) => {
    connection.query('SELECT id FROM role WHERE role = ? ', role, cb);
}

exports.register = (newUser, cb) => {
    connection.query('INSERT INTO user SET ?', newUser, cb);
};

exports.login = (username, cb) => {
    connection.query('SELECT * FROM user WHERE username = ? AND is_deleted = false', username, cb);
};

exports.refreshToken = (refreshToken, cb) => {
    connection.query('INSERT INTO refresh_token SET ?', [refreshToken], cb);
};

exports.logout = (id, cb) => {
    //connection.query('DELETE FROM refresh_token WHERE user = ? AND is_deleted = "true"', [id], cb);
    connection.query('UPDATE refresh_token SET is_deleted = true WHERE user = ? AND is_deleted = false', [id], cb);
}
