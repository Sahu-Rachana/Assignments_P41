const managerDetails = require('../models/managers'); 

exports.getManager = (req, res, next) => {
    managerDetails.getManager((err, managers) => {
        if (err) throw err;
        res.json(managers);
    });
};

exports.getManagerById = (req, res, next) => {
    managerDetails.getManagerById(req.params.id, (err, manager) => {
        if (err) throw err;
        res.json(manager);
    });
};

exports.addManager = (req, res, next) => {
    const newManager = {
        managerName: req.body.name,
        managerEmail: req.body.email,
        managerPhone: req.body.phone
    };
    managerDetails.addManager(newManager, (err) => { 
        if(err) throw err;
        res.json({message: 'Manager added successfully'});
    });
};

exports.updateManager = (req, res, next) => {
    const updatedManager = {
        managerName: req.body.name,
        managerEmail: req.body.email,
        managerPhone: req.body.phone
    };
    managerDetails.updateManager(req.params.id, updatedManager, (err) => { 
        if (err) throw err;
        res.json({message: 'Manager updated successfully'});
    });
};

exports.deleteManager = (req, res, next) => {
    managerDetails.deleteManager(req.params.id, (err) => { 
        if (err) throw err;
        res.json({message: 'Manager deleted successfully'});
    });
}; 

