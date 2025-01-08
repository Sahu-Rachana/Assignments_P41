const bcrypt = require("bcryptjs");

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
    if (req.body.role === 'user') {
        UserDetails.getRoleId(req.body.role, async (err, result) => {
            if(err) throw err;
            let roleID = await result[0].id;
            let hashedPassword = await bcrypt.hash(req.body.password, 11);
            const newUser = {
                username: req.body.username,
                password: hashedPassword,
                role: roleID,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            };
            UserDetails.addUser(newUser, (err) => { 
                if(err) throw err;
                res.json({message: 'User added successfully'});
            });
        });      
    } else {
        res.status(409).json({message: 'This route works for only user role addition.'});
    }
    
};

exports.updateUser = (req, res, next) => {
    UserDetails.getRoleById(req.params.id, async (err, result) => {
        if (err) throw err;
        let role = await result[0].role; 
        if(role === 'user'){
            let hashedPassword = await bcrypt.hash(req.body.password, 11);
            const updatedUser = {
                password: hashedPassword,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            };
            UserDetails.updateUser(req.params.id, updatedUser, (err) => { 
                if (err) throw err;
                res.json({message: 'User updated successfully'});
            });
        } else {
            res.status(409).json({message: 'This route works for only user role updation.'});
        }
    });
};

exports.deleteUser = (req, res, next) => {
    UserDetails.deleteUser(req.params.id, (err) => { 
        if (err) throw err;
        res.json({message: 'User deleted successfully'});
    });
}; 

