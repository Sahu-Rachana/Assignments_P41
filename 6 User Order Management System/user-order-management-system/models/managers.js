const connection = require('../config/dbConnect'); 

exports.getManager = (cb) => {
    connection.query('SELECT * FROM managers', cb); //cb()
};

exports.getManagerById = (id, cb) => {
    connection.query('SELECT * FROM managers WHERE managerID = ?', [id], cb);
};

exports.addManager = (newManager, cb) => {
    connection.query('INSERT INTO managers SET ?', newManager, cb);
};

exports.updateManager = (id, updatedManager, cb) => {
    connection.query('UPDATE managers SET ? WHERE managerID = ?', [updatedManager, id], cb);
};

exports.deleteManager = (id, cb) => {
    connection.query('DELETE FROM managers WHERE managerID = ?', [id], cb);
}; 
