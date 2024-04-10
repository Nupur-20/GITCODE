import React,{ useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

function Signup() {
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [address,setAddress]=useState("");
    const [dob,setDob]=useState("");
    const signup=async (e) => {
        try {
            e.preventDefault();
            const response=await fetch("http://localhost:5000/api/user/signup",{
                method: "POST",
                mode: "cors",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": username,
                    "name": name,
                    "email": email,
                    "password": password,
                    "dob": dob,
                    "address": address
                })
            })
            if (response.ok) {
                console.log("Successfully Registered");
                navigate("/login");
            }
            else {
                console.log("Something went wrong");
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name" onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputUsername1">UserName</label>
                    <input type="text" className="form-control" id="exampleInputUserName1" aria-describedby="usernameHelp" placeholder="Enter Username" onChange={(e) => {
                        setUsername(e.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputDob1">DOB</label>
                    <input type="date" className="form-control" id="exampleInputdob1" aria-describedby="userdobHelp" placeholder="Enter DOB" onChange={(e) => {
                        setDob(e.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputAddress1">Address</label>
                    <input type="text" className="form-control" id="exampleInputAddress1" aria-describedby="addressHelp" placeholder="Enter Address" onChange={(e) => {
                        setAddress(e.target.value)
                    }} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={signup}>Submit</button>
                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
            </form>
        </>
    )
}

export default Signup
