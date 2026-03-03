const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator')

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

                // Unexisting Password
                if(req.body.password !== userData.password){
                    return res.status(400).json( {errors: "Wrong Password !"} )
                }


                return res.json({success: true})
            } catch (error){
                console.log(error)
                res.json({success: false});
            }
        }
)

module.exports = router;