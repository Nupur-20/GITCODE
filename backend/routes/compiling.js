const express=require('express');
const router=express.Router();
var fs=require('fs');

router.post("/runit",async (req,res) => {
    try {
        // console.log(req.body.code);
        const code=req.body.code;
        const input=req.body.input;
        // console.log(code);
        // console.log(input);
        fs.writeFile('./temp.py',code,function (err) {
            // console.log(err);
            if (err) throw err;
            console.log('Saved!');
        });

        const util=require('util');
        const exec=util.promisify(require('child_process').exec);
        // console.log("hi")
        async function ls() {
            let inp='2';
            // console.log(inp)

            // use sys.argv[1]=> to acces input for code from terminal

            // now i need to know how many inputs and how many lines
            let command="python temp.py ";
            for (let i=0;i<input.length;i++) {
                command+=input[i]+' '
            }
            // command+='`';
            console.log(command);
            const { stdout,stderr }=await exec(command);
            console.log("here");
            console.log('stdout:',stdout);
            console.log('stderr:',stderr);
            res.json({ output: stdout,error: stderr });
        }
        ls();
    } catch (error) {
        console.log("Error in compiling(Backend)");
        console.log(error);
        res.status(500).send("Internal Server Error!!");
    }
})

module.exports=router;