const productDetails = require('../models/products'); 

exports.getProduct = (req, res, next) => {
    productDetails.getProduct((err, products) => {
        if (err) throw err;
        res.json(products);
    });
};

exports.getProductById = (req, res, next) => {
    productDetails.getProductById(req.params.id, (err, product) => {
        if (err) throw err;
        res.json(product);
    });
};

exports.addProduct = (req, res, next) => {
    const newProduct = {
        name: req.body.item,
        cost: req.body.cost
    };
    productDetails.addProduct(newProduct, (err) => { 
        if(err) throw err;
        res.json({message: 'Product added successfully'});
    });
};

exports.updateProduct = (req, res, next) => {
    const updatedProduct = {
        name: req.body.item,
        cost: req.body.cost
    };
    productDetails.updateProduct(req.params.id, updatedProduct, (err) => { 
        if (err) throw err;
        res.json({message: 'Product updated successfully'});
    });
};

exports.deleteProduct = (req, res, next) => {
    productDetails.deleteProduct(req.params.id, (err) => { 
        if (err) throw err;
        res.json({message: 'Product deleted successfully'});
    });
}; 

