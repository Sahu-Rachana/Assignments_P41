const connection = require('../config/dbConnect'); 

const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        connection.query('SELECT role FROM role WHERE id = ? ', [req.user.role], (err, result) => {
            if(err) throw err;
            //console.log(result);
            if(!allowedRoles.includes(result[0].role)) {
                return res.status(403).json({message: "Access denied by roles."});
            }
        });
        next();
    };
};

module.exports = authorizeRoles;