const express=require('express');
const router=express.Router();
const User=require('../models/User');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const { body,validationResult }=require('express-validator');// to validate details entered by user


// to access browser memory/cache
const NodeCache=require('node-cache')
const myCache=new NodeCache()


require('dotenv').config();
// Router 1 for signup of a user
router.post('/signup',[
    body('email','Enter a valid Email!!').isEmail(),
    body('password','Enter a strong password!!').isLength({ min: 8 }),
    body('username','Enter a valid username!!').isLength({ min: 5 })
],async (req,res) => {
    try {

        // validate entered req details
        const err=validationResult(req);
        if (!err.isEmpty()) {
            // used 'return' because we didn't used 'send' here as we needed to return 'json' data
            return res.json(err);
        }

        const { username,name,email,password,dob,address }=req.body;


        // Check that user already exists or not
        let user=await User.findOne({ Email: email });
        if (user) {
            res.status(400).send("Sorry!! Email already exists");
        }

        user=await User.findOne({ Username: username });
        if (user) {
            res.status(400).send("Sorry!! Username already Exists");
        }


        // salting the password and getting secured password
        const salt=await bcrypt.genSalt(10);
        const secPass=await bcrypt.hash(password,salt);

        // Registering the user
        user=await User.create({
            Name: name,
            Email: email,
            Password: secPass,
            Username: username,
            DOB: dob,
            Address: address,
        })

        // Returning the authToken to user by signing it through jwt
        const data={
            user: {
                id: user.id
            }
        }

        const signature=process.env["SIGNATURE"];
        const authToken=jwt.sign(data,signature);

        res.send({ authToken });
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error');
    }
})

router.get('/login',async (req,res) => {
    try {
        const { email,password }=req.body;

        // search the user by email
        let user=await User.findOne({ Email: email });
        if (!user) {
            res.status(404).send("No such Email Exists!!");
        }
        // compare the password entered by user and the encrypted password stored in database

        const passCompare=await bcrypt.compare(password,user.Password);
        if (!passCompare) {
            res.status(400).send("Invalid Password!!");
        }

        // Now that the user is verified
        // generate the authToken and return it to user
        const data={
            user: {
                id: user.id
            }
        }
        const signature=process.env['SIGNATURE'];
        const authToken=await jwt.sign(data,signature);

        // seting authToken value in browser memory/cache
        // myCache.set('authToken',authToken);

        res.send({ authToken });
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error');
    }
})

module.exports=router;