const express=require("express");
const authenticateToken=require("../middlewares/authenticate");
const Problem=require("../models/Problem");
const User=require("../models/User");
const router=express.Router();

router.post("/addproblem",authenticateToken,async (req,res) => {
    try {
        // Fetch user by userid
        const id=req.userId;
        console.log(id);
        if (!id) {
            res.status(404).send("Not logged In!!!");
        }
        const user=await User.findById(id);


        // Need to add problem to problems table
        console.log("In Adding problems")
        const { code,title,statement,testcases,hiddencases,tag }=req.body;
        // console.log(req.body)
        let prob=await Problem.findOne({ 'P_title': title,'P_code': code })
        if (prob) {
            console.log("Same code or title already exisits");
            res.status(400).send("Same code or title exists!!");
        }
        else {
            prob=await Problem.create({
                P_code: code,
                P_title: title,
                Statement: statement,
                Tag: tag,
                Hidden_Test_cases: hiddencases,
                Test_cases: testcases,
                Author: id //added user's id as auther
            });

            //add problem's id in questions created by user
            await user.updateOne(
                {
                    $push: {
                        Questions_Created: prob.id,
                    }
                }
            )
            console.log("Adding Done");
            res.status(200).send("Problems is done");
            // const filter={ _id: id };
            // const update={ Username: "Sihdg" };
            // await User.findOneAndUpdate(filter,update);

            // console.log("Updation Done");
        }
    } catch (error) {
        console.log("error in adding problem")
        console.log(error)
        res.status(500).send("Internal Server Error!!!");
    }
})

router.get("/allproblems",authenticateToken,async (req,res) => {
    try {
        console.log("In fetching all Problems")
        const id=req.userId;
        const user=await User.findById(id);
        console.log(user)
        const probs=user.Questions_Created;
        console.log(probs);
        const Data=[];
        await Promise.all(probs?.map(async (item) => {
            const prob=await Problem.findById(item);
            const temp={ 'id': prob['_id'],'code': prob['P_code'],'title': prob['P_title'],'statement': prob['Statement'],'tag': prob['Tag'],'testcases': prob['Test_cases'],'hiddencases': prob['Hidden_Test_cases'],'totalsubmissions': prob['Total_Submissions'],'correctsubmissions': prob['Correct_Submissions'],'verified': prob['Is_Official'],'author': user.Username,'verified': probs['Is_official'] };
            Data.push(temp);
        }))
        // console.log(Data);
        res.send(Data);
    } catch (error) {
        console.log("Coudn't fetch user problems(backend)");
        console.log(error);
        res.status(500).send("Internal Server Error!!!");
    }
})

router.post("/deleteproblem",authenticateToken,async (req,res) => {
    try {
        console.log("In Deleting problem");
        const id=req.userId;
        const user=await User.findById(id);
        // console.log(id);
        const prob_id=req.headers['prob-id'];
        // console.log(prob_id);

        // Deleteing problem in problem tables
        const response=await Problem.deleteOne({ _id: prob_id });
        // Deleting problems entry from user's table
        const response2=await user.updateOne(
            {
                $pull: {
                    Questions_Created: prob_id,
                }
            }
        )
        console.log(response);
        console.log(response2);
        res.status(200).send("Problems is successfully deleted!!!");
    } catch (error) {
        console.log("Couldn't delete problems");
        console.log(error);
        console.status(500).send("Internal Server Error");
    }
})

router.post("/updateproblem",authenticateToken,async (req,res) => {
    try {
        // Fetch user by userid
        const id=req.userId;
        console.log(id);
        if (!id) {
            res.status(404).send("Not logged In!!!");
        }
        const user=await User.findById(id);


        console.log("In Updating problem")
        const { code,title,statement,testcases,hiddencases,tag,verified,prob_id }=req.body;
        // console.log(req.body)
        console.log(prob_id);
        let prob=await Problem.findById(prob_id);
        console.log(prob);
        const response=await prob.updateOne({
            P_code: code,
            P_title: title,
            Statement: statement,
            Tag: tag,
            Hidden_Test_cases: hiddencases,
            Test_cases: testcases,
        });

        console.log("Updating Done");
        res.status(200).send("Updation is done");
        // const filter={ _id: id };
        // const update={ Username: "Sihdg" };
        // await User.findOneAndUpdate(filter,update);

        // console.log("Updation Done");

    } catch (error) {
        console.log("Error in updating problem");
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})
module.exports=router;