const connection = require('../config/dbConnect'); 

exports.getProduct = (cb) => {
    connection.query('SELECT * FROM product WHERE is_deleted = false', cb); 
};

exports.getProductById = (id, cb) => {
    connection.query('SELECT * FROM product WHERE id = ? AND is_deleted = false', [id], cb);
};

exports.addProduct = (newProduct, cb) => {
    connection.query('INSERT INTO product SET ?', newProduct, cb);
};

exports.updateProduct = (id, updatedProduct, cb) => {
    connection.query('UPDATE product SET ? WHERE id = ? AND is_deleted = false', [updatedProduct, id], cb);
};

exports.deleteProduct = (id, cb) => {
    connection.query('UPDATE product SET is_deleted = true WHERE id = ? AND is_deleted = false', [id], cb);
    //connection.query('DELETE FROM product WHERE id = ? AND is_deleted = false', [id], cb);
}; 
