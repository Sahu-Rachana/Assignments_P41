const connection = require('../config/dbConnect'); 

exports.getProduct = (cb) => {
    connection.query('SELECT * FROM products', cb); 
};

exports.getProductById = (id, cb) => {
    connection.query('SELECT * FROM products WHERE productID = ?', [id], cb);
};

exports.addProduct = (newProduct, cb) => {
    connection.query('INSERT INTO products SET ?', newProduct, cb);
};

exports.updateProduct = (id, updatedProduct, cb) => {
    connection.query('UPDATE products SET ? WHERE productID = ?', [updatedProduct, id], cb);
};

exports.deleteProduct = (id, cb) => {
    connection.query('DELETE FROM products WHERE productID = ?', [id], cb);
}; 
