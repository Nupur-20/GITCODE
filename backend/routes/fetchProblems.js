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
            "P_code": "215",
            "P_title": "sum of 2n numbers",
            "Statement": "take n as input and print <Hello World!!!!> and sum upto 2n integers",
            "Tag": "Maths",
            "Test_cases": [1,2,3,4,5],
            "Hidden_Test_Cases": [6,7,8,10],
            "Total_Submissions": 13,
            "Correct_Submissions": 7,
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