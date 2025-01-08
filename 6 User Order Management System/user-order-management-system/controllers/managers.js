const bcrypt = require("bcryptjs");

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
    if (req.body.role === 'manager') {
        managerDetails.getRoleId(req.body.role, async (err, result) => {
            if(err) throw err;
            let roleID = await result[0].id;
            let hashedPassword = await bcrypt.hash(req.body.password, 11);
            const newManager = {
                username: req.body.username,
                password: hashedPassword,
                role: roleID,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            };
            managerDetails.addManager(newManager, (err) => { 
                if(err) throw err;
                res.json({message: 'Manager added successfully'});
            });
        });       
    } else {
        res.json({message: 'This route works for only manager role addition.'});
    }
};

exports.updateManager = async (req, res, next) => {
    managerDetails.getRoleById(req.params.id, async (err, result) => {
        if (err) throw err;
        let role = await result[0].role;
        if(role === 'manager'){
            let hashedPassword = await bcrypt.hash(req.body.password, 11);
            const updatedManager = {
                password: hashedPassword,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            };
            managerDetails.updateManager(req.params.id, updatedManager, (err) => { 
                if (err) throw err;
                res.json({message: 'Manager updated successfully'});
            });
        } else {
            res.json({message: 'This route works for only manager role updation.'});
        }
    });
};

exports.deleteManager = (req, res, next) => {
    managerDetails.deleteManager(req.params.id, (err) => { 
        if (err) throw err;
        res.json({message: 'Manager deleted successfully'});
    });
}; 

