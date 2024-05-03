import React,{ useEffect,useState } from 'react'

const Compiler=() => {
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
                    'input': input
                })
            });
            const data=await response.json();
            const out=await data.output;
            const err=await data.err;
            // console.log(out);
            // console.log(err);
            if (err) {
                setOutput("Error: \n"+err)
            }
            else {
                setOutput(out);
                // setPassed(1);
                // console.log(output);
                // console.log(expectedOutput);
                const x=JSON.stringify(expectedOutput);
                const y=JSON.stringify(out);
                if (x===y) {
                    console.log("Test case Passed");
                    setPassed(1);
                }
            }
            console.log("ended");
        } catch (error) {
            console.log("Error occured while compiling");
        }
    }
    return (
        <div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="textarea" rows="3" onChange={(e) => { setCode(e.target.value) }} value={code}></textarea>
            </div>
            <div className="form-group">
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
            </div>
            {/* <div className="form-group">
                <label for="exampleFormControlTextarea1">number of integers in first line</label>
                <textarea className="form-control" id="textarea3" rows="3" onChange={(e) => { setFirstline(e.target.value) }}></textarea>
            </div> */}
            <button onClick={func1}>run</button>
            <p style={passed? { color: 'green' }:{ color: 'red' }}>{passed? "Test Case Passed":"Test Case Failed"}</p>
        </div>
    )
}

export default Compiler