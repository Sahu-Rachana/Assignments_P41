const UserDetails = require('../models/userModels');

exports.getUser = (req, res, next) => {
    //res.send("User: Rachana Sahu!");
    res.send(UserDetails.fetchAll());
};

exports.addUser = (req, res, next) => {
    //const user = new UserDetails(req.body.name, req.body.language);
    //user.save();
    res.send("User Created!");
};

exports.updateUser = (req, res, next) => {
    res.send("User Updated!");
};

exports.deleteUser = (req, res, next) => {
    res.send("User Deleted!");
};

