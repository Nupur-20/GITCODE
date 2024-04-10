import React,{ useEffect,useState } from 'react'

function Profile() {
    const [name,setName]=useState("none");
    const [username,setUsername]=useState("none");
    const [title,setTitle]=useState("none");
    const fetchDetails=async () => {
        const response=await fetch("http://localhost:5000/api/user/profile",{
            method: "GET",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Auth-Token': localStorage.getItem('authToken')
            }
        })
        if (response.ok) {
            const userData=await response.json();
            console.log(userData);
            setName(userData?.Name);
            setUsername(userData?.Username);
            setTitle(userData?.Title)
        }
        else {
            console.log("Failed to fetch user!!");
        }
    }
    const logout=() => {
        try {
            localStorage.setItem('authToken',"");
            localStorage.setItem('timeStamp',"");
            console.log("Logout Successful!!");
        } catch (error) {
            console.error("Logout Failed!!!");
        }
    }
    useEffect(() => {
        // to fetch details of current user
        fetchDetails();
    },[])
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{username}</li>
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{title}</li>
                </ul>
                <button type="button" className="btn btn-primary" onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Profile
