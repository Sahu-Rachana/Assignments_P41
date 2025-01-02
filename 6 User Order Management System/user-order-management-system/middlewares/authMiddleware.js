const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const refreshToken = req.cookies['refreshToken'];
    let accessToken;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer") && refreshToken) {
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
            if(!refreshToken) {
                res.status(401).json({message: "Access Denied. No refresh token provided."});
            }
            try {
                const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET_KEY);
                const accessToken = jwt.sign({decoded}, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: '15m'});
                res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' }).status(200).json({ message: 'Refresh Login Successful', accessToken });
            } catch (error) {
                res.status(400).send('Invalid Token.');
            }
            res.status(400).json({message: "Token is not valid"});
        }
    } else {
        res.status(401).json({message: "No token, access denied"});
    }
};

module.exports = verifyToken;