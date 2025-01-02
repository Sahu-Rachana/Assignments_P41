const UserDetails = require('../models/users'); 

exports.getUser = (req, res, next) => {
    UserDetails.getUser((err, users) => {
        if (err) throw err;
        res.json(users);
    });
};

exports.getUserById = (req, res, next) => {
    UserDetails.getUserById(req.params.id, (err, user) => {
        if (err) throw err;
        res.json(user);
    });
};

exports.addUser = (req, res, next) => {
    const newUser = {
        userId: req.body.id,
        userName: req.body.name,
        userEmail: req.body.email,
        userPhone: req.body.phone
    };
    UserDetails.addUser(newUser, (err) => { //(err, result)
        if(err) throw err;
        res.json({message: 'User added successfully'});
    });
};

exports.updateUser = (req, res, next) => {
    const updatedUser = {
        userName: req.body.name,
        userEmail: req.body.email,
        userPhone: req.body.phone
    };
    UserDetails.updateUser(req.params.id, updatedUser, (err) => { 
        if (err) throw err;
        res.json({message: 'User updated successfully'});
    });
};

exports.deleteUser = (req, res, next) => {
    UserDetails.deleteUser(req.params.id, (err) => { 
        if (err) throw err;
        res.json({message: 'User deleted successfully'});
    });
}; 

