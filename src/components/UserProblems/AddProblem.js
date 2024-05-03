import React,{ useState } from 'react'

function AddProblem() {
    const [title,setTitle]=useState("");
    const [code,setCode]=useState("");
    const [statement,setStatement]=useState("");
    // const [testcases,setTestcases]=useState("");
    // const [hiddentestcases,setHiddenTestcases]=useState("");
    const [tag,setTag]=useState("Math");
    const add=async () => {
        try {
            const token=localStorage.getItem("authtoken");
            if (token=="") {
                console.log("User need to be logged in first"); //need to add pop up for this
            }
            else {
                const response=await fetch("http://localhost:5000/api/userproblems/addproblem",{
                    method: "POST",
                    mode: "cors",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Auth-Token': localStorage.getItem('authToken')
                    },
                    body: JSON.stringify({
                        "code": code,
                        "title": title,
                        "statement": statement,
                        // "testcases": testcases,
                        // "hiddencases": hiddentestcases,
                        "tag": tag
                    })
                });
                console.log(response)
                if (response.ok) {
                    console.log("Problem successfully added!!");
                    window.location.reload(false);
                }
                else {
                    console.log("Couldn't add the Problem!!")
                }
            }
        } catch (error) {
            console.log("Error in adding problem!!");
            console.log(error);
        }
    }
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Problem code</label>
                    <textarea className="form-control" id="code" rows="3" onChange={(e) => { setCode(e.target.value) }} value={code}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Problem Title</label>
                    <textarea className="form-control" id="title" rows="3" onChange={(e) => { setTitle(e.target.value) }} value={title}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="statement">Problem Statement</label>
                    <textarea className="form-control" id="statement" rows="3" onChange={(e) => { setStatement(e.target.value) }} value={statement}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Problem Tag</label>
                    <select className="form-control" id="tag" onChange={(e) => { setTag(e.target.value) }} >
                        <option>Math</option>
                        <option>Linked List</option>
                        <option>Stack/Queue</option>
                        <option>Tree/Graph</option>
                        <option>DP</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary" onClick={add}>Add Problem</button>
                </div>
            </form>
        </div>
    )
}

export default AddProblem
