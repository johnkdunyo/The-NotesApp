const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// get user model
const User = require("../models/User");


exports.userSignUp = async(req, res, next) => {

    try {
        // check if email exist
        const userEmail = await User.findOne({email: req.body.email}).exec();
        if(userEmail){
            return res.status(401).json({
                message: "Email exists already, please use another one."
            });
        };
        
        // create a new student doc
        const newUser = new User(req.body);

        // hash user's password
        newUser.password = await bcrypt.hash(req.body.password, 10);

        // generate confirmationToken
        newUser.confirmationToken = crypto.randomBytes(32).toString('hex');

        // set confirmation token to expire in 1 day
        newUser.confirmationTokenExpires = Date.now() + 3600000;

        // save doc now
        await newUser.save();

        // sign token and return to client
        const token = jwt.sign(
            {
                id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
            }, process.env.SECRETKEY,
            {
                expiresIn: '2d'
            }
        );

        return res.status(200).json({
            message: "User registered successfully",
            data : {
                token
            }
        });

        
    } catch (error) {
        next(error)
    }
};


exports.userSignIn = async (req, res, next) => {

    try {
        // get user by email
        const user = await User.findOne({email: req.body.email}).exec();

        if(!user){
            return res.status(401).json({
                message: "Email entered does not exist. Please procceed to create an account"
            })
        };

        //check password
        const passCheck = await bcrypt.compare(req.body.password, user.password);
        if(!passCheck){
            return res.status(401).json({
                message: "Password incorrect, please check and enter again"
            })
        };


        // now we good
        const token = jwt.sign(
            {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            }, process.env.SECRETKEY,
            {
                expiresIn: '2d'
            }
        );

        return res.status(200).json({
            message: "Login successful",
            data: {
                token,
            }
        });
        
    } catch (error) {
        next(error);
    }
}