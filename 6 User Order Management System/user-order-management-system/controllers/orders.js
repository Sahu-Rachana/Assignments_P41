const orderDetails = require('../models/orders'); 

exports.getOrder = (req, res, next) => {
    orderDetails.getOrder((err, orders) => {
        if (err) throw err;
        res.json(orders);
    });
};

exports.getOrdersByUserId = (req, res, next) => {
    orderDetails.getOrdersByUserId(req.params.id, (err, order) => {
        if (err) throw err;
        res.json(order);
    });
};

exports.getOrderById = (req, res, next) => {
    orderDetails.getOrderById(req.params.id, (err, order) => {
        if (err) throw err;
        res.json(order);
    });
};

exports.addOrder = (req, res, next) => {
    let newOrder = {
        id: req.body.orderID,
        user: req.body.userID
    };
    orderDetails.checkOrderId(newOrder.id, async(err, result) => {
        if(result.length > 0 ) {
            let r = await result;
            if(r) {
                return res.json({message: `Use update order as order already present with orderID = ${r[0].id} and userID = ${r[0].user}`});
            }
        }
        else {
            orderDetails.addOrder(newOrder, async (err, result) => { 
                if(err) throw err;
                let a = await result;      
            });
            
            orderDetails.getItemId(req.body.item, async(err, result) => {
                if(err) throw err;
                let itemID = await result[0].id;
                let newOrderItem = {
                    order_id: req.body.orderID,
                    item_id: itemID,
                    quantity: req.body.quantity
                };
                orderDetails.addOrderItem(newOrderItem, async (err, result) => { 
                    if(err) throw err;     
                    let a = await result; 
                });
            });       
            res.json({message: 'Order added successfully'});
        }
    });    
};

exports.addOrderItem = (req, res, next) => {
    orderDetails.getItemId(req.body.item, async(err, result) => {
        if(err) throw err;
        //console.log(await result);
        let itemID = await result[0].id;
        const newOrderItem = {
            order_id: req.params.id,
            item_id: itemID,
            quantity: req.body.quantity
        };
        orderDetails.addOrderItem(newOrderItem, (err) => { 
            if(err) throw err;      
        });
        res.json({message: 'Order updated successfully'});
    });    
};

exports.updateOrderItemQuantity = (req, res, next) => {
    let itemID;
    orderDetails.getItemId(req.body.item, async(err, result) => {
        if(err) throw err;
        itemID = await result[0].id;
        orderDetails.updateOrderItemQuantity(req.params.id, itemID, req.body.quantity, (err) => { 
            if(err) throw err;      
        });
        res.json({message: 'Quantity updated successfully'});
    }); 
};

exports.deleteOrderItem = (req, res, next) => {
    let itemID;
    orderDetails.getItemId(req.params.itemName, async(err, result) => {
        if(err) throw err;
        itemID = await result[0].id;
        orderDetails.deleteOrderItem(req.params.id, itemID, (err) => { 
            if(err) throw err;      
        });
        res.json({message: 'Order Item deleted successfully'});
    }); 
};

exports.deleteOrder = (req, res, next) => {
    orderDetails.deleteOrderItems(req.params.id, (err) => {
        if (err) throw err;
    });
    orderDetails.deleteOrder(req.params.id, (err) => { 
        if (err) throw err;
        res.json({message: 'Order deleted successfully'});
    });
}; 

