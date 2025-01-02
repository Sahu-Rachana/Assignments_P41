const connection = require('../config/dbConnect'); 

exports.register = (newUser, cb) => {
    connection.query('INSERT INTO user_register SET ?', newUser, cb);
};

exports.login = (username, cb) => {
    connection.query('SELECT * FROM user_register WHERE username = ? ', username, cb);
};
