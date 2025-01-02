const superAdminDetails = require('../models/superAdmin'); 

exports.getSuperAdmin = (req, res, next) => {
    superAdminDetails.getSuperAdmin((err, superAdmins) => {
        if (err) throw err;
        res.json(superAdmins);
    });
};

exports.getSuperAdminById = (req, res, next) => {
    superAdminDetails.getSuperAdminById(req.params.id, (err, superAdmin) => {
        if (err) throw err;
        res.json(superAdmin);
    });
};

exports.addSuperAdmin = (req, res, next) => {
    const newSuperAdmin = {
        adminName: req.body.name,
        adminEmail: req.body.email,
        adminPhone: req.body.phone
    };
    superAdminDetails.addSuperAdmin(newSuperAdmin, (err) => { 
        if(err) throw err;
        res.json({message: 'Super Admin added successfully'});
    });
};

exports.updateSuperAdmin = (req, res, next) => {
    const updatedSuperAdmin = {
        adminName: req.body.name,
        adminEmail: req.body.email,
        adminPhone: req.body.phone
    };
    superAdminDetails.updateSuperAdmin(req.params.id, updatedSuperAdmin, (err) => { 
        if (err) throw err;
        res.json({message: 'Super Admin updated successfully'});
    });
};

exports.deleteSuperAdmin = (req, res, next) => {
    superAdminDetails.deleteSuperAdmin(req.params.id, (err) => { 
        if (err) throw err;
        res.json({message: 'Super Admin deleted successfully'});
    });
}; 

