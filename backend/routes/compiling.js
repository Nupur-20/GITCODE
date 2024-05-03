const express=require('express');
const router=express.Router();
var fs=require('fs');
const Problem=require('../models/Problem');

router.post("/runit",async (req,res) => {
    try {
        // console.log(req.body.code);
        const code=req.body.code;
        // const input=req.body.input;
        const prob_id=req.body.probid;
        console.log(prob_id)
        // save the code in python file first
        fs.writeFile('./temp.py',code,function (err) {
            // console.log(err);
            if (err) throw err;
            console.log('Saved!');
        });

        let problem=await Problem.findById(prob_id);
        const testcases=problem.Test_cases;

        const util=require('util');
        const exec=util.promisify(require('child_process').exec);
        // console.log("hi")
        const Output=[]; //will contain 1 or 0 to show that ith test case passed or not
        let passed=1;
        const ls=async (input,output) => {

            // use sys.argv[1]=> to acces input for code from terminal

            // now i need to know how many inputs and how many lines
            let command="python temp.py ";
            input.forEach(element => {
                element.forEach(element2 => {
                    command+=element2+' '
                });
            });
            // for (let i=0;i<input.length;i++) {
            //     command+=input[i]+' '
            // }
            // command+='`';
            console.log(command);
            const { stdout,stderr }=await exec(command);
            console.log('stdout:',stdout);
            console.log('stderr:',stderr);
            if (stderr) {
                res.status(200).json({ passed: 0,compiled: 0,message: "Error while running a test case",error: stderr });
            }
            const out=stdout;
            const output_array=out.split("\n");
            let final_output_array=[];
            output_array.forEach(element => {
                // const ele=element+'0';
                const ele=element.replace("\r","");
                temp=ele.split('\r');
                final_output_array.push(temp);
                // temp.forEach(element2 => {
                //     final_output_array.push(element2);
                // })
            });
            console.log(final_output_array)
            let f=1;
            for (let i=0;i<output.length;i++) {
                // console.log(output[i]);
                // console.log(final_output_array[i]);
                if (JSON.stringify(output[i])!=JSON.stringify(final_output_array[i])) {
                    f=0;
                    passed=0;
                    break;
                }
            }
            // console.log(f);
            Output.push(f);
            // res.json({ output: stdout,error: stderr });
        }
        for (let i=0;i<testcases.length;i++) {
            await ls(testcases[i].input,testcases[i].output);
        }
        console.log(Output);
        res.status(200).send({ passed: passed,compiled: 1,message: "All test cases runned succesfully",output: Output });
    } catch (error) {
        console.log("Error in compiling(Backend)");
        console.log(error);
        res.status(500).send("Internal Server Error!!");
    }
})

module.exports=router;