const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator')

const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const jwtSecret = "12345678901234567890123456789012"

router.post(
    "/loginUser",

    [
        body('email').isEmail(),
        body('password', 'Password must be atleast 5 characters long!').isLength({ min: 5 })
    ],

    async (req, res) => 
        {   
            // Typed Errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            let email = req.body.email;
            try{
                // Unexisting Email
                let userData = await User.findOne({email});
                if(!userData){
                    return res.status(400).json( {errors: "Email can not be found !"} );
                }

                // Instead of directly checking if req.body.password !== userData.password
                // Since, now we store crypted password, we compare the password submitted during login
                // with saved crypted password like this.

                const pwdCompare = await bcrypt.compare(req.body.password, userData.password)

                // Unexisting Password
                if(!pwdCompare){
                    return res.status(400).json( {errors: "Wrong Password !"} )
                }

                const data = {
                    user: {
                        id: userData.id
                    }
                }

                const authToken = jwt.sign(data, jwtSecret)
                return res.json({success: true, authToken: authToken})
            } catch (error){
                console.log(error)
                res.json({success: false});
            }
        }
)

module.exports = router;