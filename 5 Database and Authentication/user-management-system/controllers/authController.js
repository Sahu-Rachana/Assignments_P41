const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userDetails = require('../models/authModel');

/*const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');
    if(!token) {
        return res.status(401).json({error: 'Unauthorized'});
    }
    jwt.verify(token.split(' ')[1], secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({error: 'Forbidden'});
        }
        req.user = user;
        next();
    });
};*/

exports.register = async (req, res) => {
    try {
        let hashedPassword = await bcrypt.hash(req.body.password, 11);
        const newUser = {
            username: req.body.username,
            password: hashedPassword,
            role: req.body.role
        };
        userDetails.register(newUser, (err) => { 
            if(err) throw err;
            res.status(201).json({message: `User Registered successfully with username : ${newUser.username}`});
        });
    } catch (err) {
        res.status(500).json({message: "Something went wrong"});
    }
    
};

   
exports.login = (req, res) => {
    try {
        const user = {
            username: req.body.username,
            password: req.body.password
        };
        userDetails.login(user.username, async (err, result) => {
            if(err) throw err;
            if (result.length > 0) {
                const isMatch = await bcrypt.compare(user.password, result[0].password);
                if(!isMatch) {
                    res.status(400).json({message: "Invalid Credentials"});
                }
                const accessToken = jwt.sign({id: result[0].id, role: result[0].role}, process.env.ACCESS_TOKEN_SECRET_KEY, {expiresIn: "15m"});
                const refreshToken = jwt.sign({id: result[0].id, role: result[0].role}, process.env.REFRESH_TOKEN_SECRET_KEY, {expiresIn: "30d"});
                console.log('JWT Access Token:', accessToken);
                console.log('JWT Refresh Token:', refreshToken);
                res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' }).status(200).json({ message: 'Login successful', accessToken, refreshToken });
            }
            else {
                console.log("User not found");
                res.status(404).json({ message: 'User not found' });
            }
        });
    } catch (err) {
        res.status(500).json({message: "Something went wrong"});
    }
    
};

exports.refresh = (req, res) => {
    const refreshToken = req.cookies['refreshToken'];
    if(!refreshToken) {
        res.status(401).send('Access Denied. No refresh token provided.');
    }
    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET_KEY);
        const accessToken = jwt.sign({decoded}, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: '15m' });
        res.status(200).json({ message: 'Refresh successful', accessToken });
    } catch (error) {
        res.status(400).send('Invalid refresh token.');       
    }
};

/*exports.protected = (authenticateJWT, (req, res) => {
    res.json({message: "Access granted"});
});*/