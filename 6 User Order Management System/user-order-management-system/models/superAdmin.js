const connection = require('../config/dbConnect'); 

exports.getSuperAdmin = (cb) => {
    connection.query('SELECT * FROM admin', cb); 
};

exports.getSuperAdminById = (id, cb) => {
    connection.query('SELECT * FROM admin WHERE adminID = ?', [id], cb);
};

exports.addSuperAdmin = (newAdmin, cb) => {
    connection.query('INSERT INTO admin SET ?', newAdmin, cb);
};

exports.updateSuperAdmin = (id, updatedAdmin, cb) => {
    connection.query('UPDATE admin SET ? WHERE adminID = ?', [updatedAdmin, id], cb);
};

exports.deleteSuperAdmin = (id, cb) => {
    connection.query('DELETE FROM admin WHERE adminId = ?', [id], cb);
}; 
