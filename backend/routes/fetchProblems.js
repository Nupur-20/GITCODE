const express=require('express');
const router=express.Router();
const Problem=require('../models/Problem');

// Router 1:getting all problems stored in database
router.get('/all',async (req,res) => {
    try {
        // console.log("i am getting data");
        const data=await Problem.find();
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error!!!');
    }
})

router.post('/save',async (req,res) => {
    try {
        const entry=new Problem({
            "P_code": "214",
            "P_title": "sum of n numbers",
            "Statement": "take n as input and print <Hello World!!!!> and sum upto n integers",
            "Test_cases": [1,2,3],
            "Hidden_Test_Cases": [4,5,7,10],
            "Total_Submissions": 3,
            "Correct_Submissions": 2,
            "Is_official": true
        });
        const savedData=await entry.save();
        console.log(savedData);
        res.send(savedData);
    } catch (error) {
        res.status(500).send('Internal Server Error!!!');
    }
})

module.exports=router;