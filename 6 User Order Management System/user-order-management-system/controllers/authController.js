const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userDetails = require('../models/authModel');

exports.register = async (req, res) => {
    try {
        let hashedPassword = await bcrypt.hash(req.body.password, 11);
        userDetails.findRoleId(req.body.role, async (err, result) => {
            if(err) throw err;
            let roleId = await result[0].id;
            
            const newUser = {
                username: req.body.username,
                password: hashedPassword,
                role: roleId,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            };
            userDetails.register(newUser, (err) => { 
                if(err) throw err;
                res.status(201).json({message: `User Registered successfully with username : ${newUser.username}`});
            });
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
            
            /*//logout from previous session or delete preivious refresh tokens
            userDetails.logout(result[0].id, async (err) => {
                if(err) throw err;
            });*/

            if (result.length > 0) {
                const isMatch = await bcrypt.compare(user.password, result[0].password);
                if(!isMatch) {
                    res.status(400).json({message: "Invalid Credentials"});
                }
                const accessToken = jwt.sign({id: result[0].id, role: result[0].role}, process.env.ACCESS_TOKEN_SECRET_KEY, {expiresIn: "15m"});
                const refreshToken = jwt.sign({id: result[0].id, role: result[0].role}, process.env.REFRESH_TOKEN_SECRET_KEY, {expiresIn: "30d"});
                console.log('JWT Access Token:', accessToken);
                console.log('JWT Refresh Token:', refreshToken);
                
                userDetails.refreshToken({user: result[0].id, refresh_token: refreshToken}, (err) => {
                    if(err) throw err;
                    console.log("Refresh Token Stored.");
                });

                res.status(200).json({ message: 'Login successful', accessToken, refreshToken });
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

exports.refresh = (req, res, next) => {
    const refreshToken = req.body.refreshToken;
    let accessToken;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if((authHeader && authHeader.startsWith("Bearer")) || refreshToken) {
        accessToken = authHeader.split(" ")[1];
    
        if(!accessToken) {
            res.status(401).json({message: "No token, authorization denied"});
        }
        if(!refreshToken) {
            res.status(401).json({message: "Access Denied. No refresh token provided."});
        }
        try {
            const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET_KEY);
            //console.log(decoded);
            const accessToken = jwt.sign({id: decoded.id, role: decoded.role}, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: '15m'});
            res.status(200).json({ message: 'Refresh Login Successful', accessToken });
        } catch (error) {
            console.log(error);
            res.status(400).json({message:'Invalid Token.'});
        }
        //res.status(400).json({message: "Token is not valid"});
    } else {
        res.status(401).json({message: "No token, access denied"});
    }
};

exports.logout = (req, res, next) => {
    userDetails.logout(req.user.id, (err) => {
        if (err) throw err;
        res.status(200).json({message: 'User Logout Successful'});
    });
};
