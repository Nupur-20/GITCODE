import React,{ useEffect,useState } from 'react'

const Compiler=(props) => {
    const prob_id=props.prob_id;
    const [code,setCode]=useState("import sys\n# Input format is x=sys.argv[i]\n# Enter your code here\n");
    const [expectedOutput,setExpectedOutput]=useState([4,6]);
    const [output,setOutput]=useState("");
    const [passed,setPassed]=useState(0);
    const [input,setInput]=useState([2,1,3,2,4]);
    // const [input_in_firstline,setFirstline]=useState(0);
    const func1=async () => {
        try {
            setPassed(0);
            const response=await fetch("http://localhost:5000/api/compiling/runit",{
                method: "POST",
                mode: "cors",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Auth-Token': localStorage.getItem('authToken'),
                },
                body: JSON.stringify({
                    'code': code,
                    'probid': prob_id
                })
            });
            const data=await response.json();
            console.log(data);
            if (!data.compiled) {
                console.log("Compilation Error");
                console.log(data.error);
            }
            else {
                console.log("Compilation Successful");
                let count=1;
                data.output.forEach(element => {
                    if (element) {
                        console.log(`Test case ${count} passed`);
                    }
                    else {
                        console.log(`Wrong answer on Test case ${count}`);
                    }
                    count+=1;
                });
                if (data.passed) {
                    console.log("All test cases passed");
                    setPassed(1);
                }
            }
            // const out=await data.output;
            // const err=await data.err;
            // // console.log(out);
            // // console.log(err);
            // if (err) {
            //     setOutput("Error: \n"+err)
            // }
            // else {
            //     setOutput(out);
            //     // setPassed(1);
            //     // console.log(output);
            //     // console.log(expectedOutput);
            //     const x=JSON.stringify(expectedOutput);
            //     const y=JSON.stringify(out);
            //     if (x===y) {
            //         console.log("Test case Passed");
            //         setPassed(1);
            //     }
            // }
            // console.log("ended");
        } catch (error) {
            console.log("Error occured while compiling");
        }
    }
    return (
        <div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Write Your code here</label>
                <textarea className="form-control" id="textarea" rows="19" onChange={(e) => { setCode(e.target.value) }} value={code}></textarea>
            </div>
            {/* <div className="form-group">
                <label for="exampleFormControlTextarea1">Input</label>
                <textarea className="form-control" id="textarea4" rows="3" value={input}></textarea>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Expected Output</label>
                <textarea className="form-control" id="textarea2" rows="3" value={expectedOutput}></textarea>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Outcome</label>
                <textarea className="form-control" id="textarea3" rows="3" value={output}></textarea>
            </div> */}
            {/* <div className="form-group">
                <label for="exampleFormControlTextarea1">number of integers in first line</label>
                <textarea className="form-control" id="textarea3" rows="3" onChange={(e) => { setFirstline(e.target.value) }}></textarea>
            </div> */}
            <button onClick={func1}>Submit</button>
            <p style={passed? { color: 'green' }:{ color: 'red' }}>{passed? "Test Case Passed":"Test Case Failed"}</p>
        </div>
    )
}

export default Compiler