const connection = require('../config/dbConnect'); 

exports.getOrder = (cb) => {
    connection.query('SELECT * FROM orders', cb); 
};

exports.getOrderById = (id, cb) => {
    connection.query('SELECT * FROM orders WHERE orderID = ?', [id], cb);
};

exports.addOrder = (newOrder, cb) => {
    connection.query('INSERT INTO orders SET ?', newOrder, cb);
};

exports.updateOrder = (id, updatedOrder, cb) => {
    connection.query('UPDATE orders SET ? WHERE orderID = ?', [updatedOrder, id], cb);
};

exports.deleteOrder = (id, cb) => {
    connection.query('DELETE FROM orders WHERE orderID = ?', [id], cb);
}; 
