const orderDetails = require('../models/orders'); 

exports.getOrder = (req, res, next) => {
    orderDetails.getOrder((err, orders) => {
        if (err) throw err;
        res.json(orders);
    });
};

exports.getOrderById = (req, res, next) => {
    orderDetails.getOrderById(req.params.id, (err, order) => {
        if (err) throw err;
        res.json(order);
    });
};

exports.addOrder = (req, res, next) => {
    const newOrder = {
        orderID: req.body.id,
        userName: req.body.name,
        itemName: req.body.item,
        quantity: req.body.quantity
    };
    orderDetails.addOrder(newOrder, (err) => { 
        if(err) throw err;
        res.json({message: 'Order added successfully'});
    });
};

exports.updateOrder = (req, res, next) => {
    const updatedOrder = {
        orderID: req.body.id,
        userName: req.body.name,
        itemName: req.body.item,
        quantity: req.body.quantity
    };
    orderDetails.updateOrder(req.params.id, updatedOrder, (err) => { 
        if (err) throw err;
        res.json({message: 'Order updated successfully'});
    });
};

exports.deleteOrder = (req, res, next) => {
    orderDetails.deleteOrder(req.params.id, (err) => { 
        if (err) throw err;
        res.json({message: 'Order deleted successfully'});
    });
}; 

