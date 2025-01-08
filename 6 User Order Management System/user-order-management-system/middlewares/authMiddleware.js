const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let accessToken;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")) {
        accessToken = authHeader.split(" ")[1];

        if(!accessToken) {
            res.status(401).json({message: "No token, authorization denied"});
        }
        try { 
            const decode = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET_KEY);
            req.user = decode;
            //console.log("The decoded user is : ", req.user);
            next();
        } catch(err) {
            res.status(400).json({message: "Token is not valid"});
        }
    } else {
        res.status(401).json({message: "No token, access denied"});
    }
};

module.exports = verifyToken;