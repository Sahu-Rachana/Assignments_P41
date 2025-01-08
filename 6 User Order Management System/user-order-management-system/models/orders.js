const connection = require('../config/dbConnect'); 

exports.getOrder = (cb) => {
    connection.query('SELECT * FROM user_order_management.order WHERE is_deleted = false', cb); 
};

exports.getOrdersByUserId = (id, cb) => {
    //console.log(id);
    connection.query('SELECT * FROM user_order_management.order WHERE user = ? AND is_deleted = false', [id], cb);
};

exports.getOrderById = (id, cb) => {
    connection.query('SELECT t1.user, t2.order_id, t3.name, t3.cost, t2.quantity FROM user_order_management.order t1 INNER JOIN user_order_management.order_item t2 ON t1.id = t2.order_id INNER JOIN user_order_management.product t3 ON t2.item_id = t3.id  WHERE t1.id = ?  AND t1.is_deleted = false AND t2.is_deleted = false AND t3.is_deleted = false', [id], cb);
};

exports.addOrder = (newOrder, cb) => {
    connection.query('INSERT INTO user_order_management.order SET ? ', [newOrder], cb);
};
exports.checkOrderId = (id, cb) => {
    connection.query("SELECT * FROM user_order_management.order WHERE id = ? AND is_deleted = false", [id], cb);
};

exports.getItemId = (itemName, cb) => {
    connection.query('SELECT * FROM user_order_management.product WHERE name = ? AND is_deleted = false', [itemName], cb);
};
exports.addOrderItem = (newOrderItem, cb) => {
    connection.query('INSERT INTO user_order_management.order_item SET ?', [newOrderItem], cb);
};

exports.updateOrderItemQuantity = (orderId, itemId, quantity, cb) => {
    connection.query('UPDATE user_order_management.order_item SET quantity = ? WHERE order_id = ? AND item_id = ? AND is_deleted = false', [quantity, orderId, itemId], cb);
};

exports.deleteOrderItem = (orderId, itemId, cb) => {
    connection.query('UPDATE user_order_management.order_item SET is_deleted = true WHERE order_id = ? AND item_id = ? AND is_deleted = false', [orderId, itemId], cb);
    //connection.query('DELETE FROM order_item WHERE order_id = ? AND item_id = ? AND is_deleted = false', [orderId, itemId], cb);
}; 

exports.deleteOrderItems = (id, cb) => {
    connection.query('UPDATE user_order_management.order_item SET is_deleted = true WHERE order_id = ? AND is_deleted = false', [id], cb);
    //connection.query('DELETE FROM order_item WHERE order_id = ?', [id], cb);
}; 
exports.deleteOrder = (id, cb) => {
    connection.query('UPDATE user_order_management.order SET is_deleted = true WHERE id = ? AND is_deleted = false', [id], cb);
    //connection.query('DELETE FROM order WHERE id = ?', [id], cb);
}; 
