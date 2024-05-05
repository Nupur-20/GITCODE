import imag0 from "../Images/Ranks/5.svg"
import React,{ useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
import { PieChart } from "@mui/x-charts/PieChart"

function Profile() {
    const data=[
        { id: 0,value: 10,label: "series A" },
        { id: 1,value: 15,label: "series B" },
        { id: 2,value: 20,label: "series C" },
    ]
    const imag=imag0
    const titles={ 0: "white",1: "grey",2: "yellow",3: "green",4: "blue",5: "red",6: "black" }
    const navigate=useNavigate()
    const [name,setName]=useState("none")
    const [username,setUsername]=useState("none")
    const [title,setTitle]=useState(0)
    const [email,setEmail]=useState("");
    const fetchDetails=async () => {
        try {
            const response=await fetch("http://localhost:5000/api/user/profile",{
                method: "GET",
                mode: "cors",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Auth-Token": localStorage.getItem("authToken"),
                },
            })
            if (response.ok) {
                const userData=await response.json()
                console.log(userData)
                setName(userData?.Name)
                setUsername(userData?.Username)
                setEmail(userData?.Email)
                setTitle(userData?.Title)
            } else {
                console.log("Failed to fetch user!!")
                navigate("/login")
            }
        } catch (error) {
            console.error(error)
        }
    }
    const logout=() => {
        try {
            localStorage.setItem("authToken","")
            localStorage.setItem("timeStamp","")
            console.log("Logout Successful!!")
            navigate("/login")
        } catch (error) {
            console.error("Logout Failed!!!")
        }
    }
    useEffect(() => {
        // to fetch details of current user
        fetchDetails()
    },[])
    return (
        <section style={{ backgroundColor: "#eee" }}>
            <div className="container py-5" style={{ marginTop: "10px" }}>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                <h5 className="my-3">{name}</h5>
                                <p className="text-muted mb-1">{titles[title]}</p>
                                {/* <div className="d-flex justify-content-center mb-2">
                  <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary">
                    Follow
                  </button>
                  <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary ms-1">
                    Message
                  </button>
                </div> */}
                            </div>
                        </div>
                        <div className="card mt-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="2" y1="12" x2="22" y2="12"></line>
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                        </svg>
                                        Website
                                    </h6>
                                    <span className="text-secondary">https://bootdey.com</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                        Github
                                    </h6>
                                    <span className="text-secondary">bootdey</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info">
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                        </svg>
                                        Twitter
                                    </h6>
                                    <span className="text-secondary">@bootdey</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg>
                                        Instagram
                                    </h6>
                                    <span className="text-secondary">bootdey</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                        Facebook
                                    </h6>
                                    <span className="text-secondary">bootdey</span>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">https://mdbootstrap.com</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-github fa-lg" style={{ color: "#333333" }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-twitter fa-lg" style={{ color: "#55acee" }}></i>
                    <p className="mb-0">@mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-instagram fa-lg" style={{ color: "#ac2bac" }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                </ul>
              </div>
            </div> */}
                    </div>
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Full Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{name}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Username</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{username}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{ }</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Mobile</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">(098) 765-4321</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Address</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-4 mb-md-0">
                                    <div className="card-body">
                                        {/* <p className="mb-4">
                      <span className="text-primary font-italic me-1">assigment</span> Project Status
                    </p>
                    <p className="mb-1" style={{ fontSize: ".77rem" }}>
                      Web Design
                    </p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Website Markup
                    </p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      One Page
                    </p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "89%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Mobile Template
                    </p>
                    <div className="progress rounded" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Backend API
                    </p>
                    <div className="progress rounded mb-2" style={{ height: "5px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "66%" }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> */}
                                        <PieChart
                                            series={[
                                                {
                                                    data,
                                                    highlightScope: { faded: "global",highlighted: "item" },
                                                    faded: { innerRadius: 30,additionalRadius: -30,color: "gray" },
                                                },
                                            ]}
                                            height={200}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card mb-4 mb-md-0">
                                    <div className="card-body" style={{ display: "flex",justifyContent: "center" }}>
                                        {/* <p>Champion</p> */}
                                        <img src={imag} alt="avatar" style={{ width: "146px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-outline-primary" onClick={logout} style={{ marginLeft: "1000px",marginTop: "20px" }}>
                    Logout
                </button>
            </div>
        </section>
    )
}

export default Profile