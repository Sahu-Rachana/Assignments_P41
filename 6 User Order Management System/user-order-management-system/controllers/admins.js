const bcrypt = require("bcryptjs");

const adminDetails = require('../models/admins'); 

exports.getAdmin = (req, res, next) => {
    adminDetails.getAdmin((err, admins) => {
        if (err) throw err;
        res.json(admins);
    });
};

exports.getAdminById = (req, res, next) => {
    adminDetails.getAdminById(req.params.id, (err, admin) => {
        if (err) throw err;
        res.json(admin);
    });
};

exports.addAdmin = (req, res, next) => {
    if (req.body.role === 'admin') {
        adminDetails.getRoleId(req.body.role, async (err, result) => {
            if(err) throw err;
            let roleID = await result[0].id;
            let hashedPassword = await bcrypt.hash(req.body.password, 11);
            const newAdmin = {
                username: req.body.username,
                password: hashedPassword,
                role: roleID,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            };
            adminDetails.addAdmin(newAdmin, (err) => { 
                if(err) throw err;
                res.json({message: 'Admin added successfully'});
            });
        });   
    } else {
        res.json({message: 'This route works for only admin role addition.'});
    }
};

exports.updateAdmin = async (req, res, next) => {
    adminDetails.getRoleById(req.params.id, async (err, result) => {
        if (err) throw err;
        let role = await result[0].role;
        if (role === 'admin') {
            let hashedPassword = await bcrypt.hash(req.body.password, 11);
            const updatedAdmin = {
                password: hashedPassword,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            };
            adminDetails.updateAdmin(req.params.id, updatedAdmin, (err) => { 
                if (err) throw err;
                res.json({message: 'Admin updated successfully'});
            });          
        } else {
            res.json({message: 'This route works for only admin role updation.'});
        }
    });
    
};

exports.deleteAdmin = (req, res, next) => {
    adminDetails.deleteAdmin(req.params.id, (err) => { 
        if (err) throw err;
        res.json({message: 'Admin deleted successfully'});
    });
}; 

