import React,{ useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
// to access browser memory/cache

function Login() {
    const navigate=useNavigate();
    const [authToken,setauthToken]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const login=async (e) => {
        try {
            e.preventDefault();
            navigate("/");
            const response=await fetch("http://localhost:5000/api/user/login",{
                method: "POST",
                mode: "cors",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            });

            if (response.ok) {
                const token=await response.json();
                setauthToken(token.authToken);
                const currDate=new Date().toLocaleDateString();
                const currTime=new Date().toLocaleTimeString();
                localStorage.setItem('authToken',token.authToken);
                localStorage.setItem('timeStamp',currTime);
                console.log("Login successful");
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            console.log("here it comes");
            console.error("Error:",error);
            // Navigate("/");
        }
    }
    return (
        <>
            <form>
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
                <button type="submit" className="btn btn-primary" onClick={login}>Submit</button>
                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
            </form>
        </>
    );
}

export default Login;
