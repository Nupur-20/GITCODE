// import React,{ useEffect,useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// function Profile() {
//     const titles={ 0: 'white',1: 'grey',2: 'yellow',3: 'green',4: 'blue',5: 'red',6: 'black' }
//     const navigate=useNavigate();
//     const [name,setName]=useState("none");
//     const [username,setUsername]=useState("none");
//     const [title,setTitle]=useState(0);
//     const fetchDetails=async () => {
//         const response=await fetch("http://localhost:5000/api/user/profile",{
//             method: "GET",
//             mode: "cors",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Auth-Token': localStorage.getItem('authToken')
//             }
//         })
//         if (response.ok) {
//             const userData=await response.json();
//             console.log(userData);
//             setName(userData?.Name);
//             setUsername(userData?.Username);
//             setTitle(userData?.Title);
//         }
//         else {
//             console.log("Failed to fetch user!!");
//             navigate("/login");
//         }
//     }
//     const logout=() => {
//         try {
//             localStorage.setItem('authToken',"");
//             localStorage.setItem('timeStamp',"");
//             console.log("Logout Successful!!");
//             navigate("/login");
//         } catch (error) {
//             console.error("Logout Failed!!!");
//         }
//     }
//     useEffect(() => {
//         // to fetch details of current user
//         fetchDetails();
//     },[])
//     return (
//         // <div>
//         //     <div className="card" style={{ width: '18rem' }}>
//         //         <ul className="list-group list-group-flush">
//         //             <li className="list-group-item">{username}</li>
//         //             <li className="list-group-item">{name}</li>
//         //             <li className="list-group-item">{titles[title]}</li>
//         //         </ul>
//         //         <button type="button" className="btn btn-primary" onClick={logout}>Logout</button>
//         //     </div>
//         // </div>

//         <section style="background-color: #eee;">
//             <div class="container py-5">
//                 <div class="row">
//                     <div class="col">
//                         <nav aria-label="breadcrumb" class="bg-body-tertiary rounded-3 p-3 mb-4">
//                             <ol class="breadcrumb mb-0">
//                                 <li class="breadcrumb-item"><a href="#">Home</a></li>
//                                 <li class="breadcrumb-item"><a href="#">User</a></li>
//                                 <li class="breadcrumb-item active" aria-current="page">User Profile</li>
//                             </ol>
//                         </nav>
//                     </div>
//                 </div>

//                 <div class="row">
//                     <div class="col-lg-4">
//                         <div class="card mb-4">
//                             <div class="card-body text-center">
//                                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
//                                     class="rounded-circle img-fluid" style="width: 150px;" />
//                                 <h5 class="my-3">John Smith</h5>
//                                 <p class="text-muted mb-1">Full Stack Developer</p>
//                                 <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
//                                 <div class="d-flex justify-content-center mb-2">
//                                     <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary">Follow</button>
//                                     <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-primary ms-1">Message</button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="card mb-4 mb-lg-0">
//                             <div class="card-body p-0">
//                                 <ul class="list-group list-group-flush rounded-3">
//                                     <li class="list-group-item d-flex justify-content-between align-items-center p-3">
//                                         <i class="fas fa-globe fa-lg text-warning"></i>
//                                         <p class="mb-0">https://mdbootstrap.com</p>
//                                     </li>
//                                     <li class="list-group-item d-flex justify-content-between align-items-center p-3">
//                                         <i class="fab fa-github fa-lg" style="color: #333333;"></i>
//                                         <p class="mb-0">mdbootstrap</p>
//                                     </li>
//                                     <li class="list-group-item d-flex justify-content-between align-items-center p-3">
//                                         <i class="fab fa-twitter fa-lg" style="color: #55acee;"></i>
//                                         <p class="mb-0">@mdbootstrap</p>
//                                     </li>
//                                     <li class="list-group-item d-flex justify-content-between align-items-center p-3">
//                                         <i class="fab fa-instagram fa-lg" style="color: #ac2bac;"></i>
//                                         <p class="mb-0">mdbootstrap</p>
//                                     </li>
//                                     <li class="list-group-item d-flex justify-content-between align-items-center p-3">
//                                         <i class="fab fa-facebook-f fa-lg" style="color: #3b5998;"></i>
//                                         <p class="mb-0">mdbootstrap</p>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-lg-8">
//                         <div class="card mb-4">
//                             <div class="card-body">
//                                 <div class="row">
//                                     <div class="col-sm-3">
//                                         <p class="mb-0">Full Name</p>
//                                     </div>
//                                     <div class="col-sm-9">
//                                         <p class="text-muted mb-0">Johnatan Smith</p>
//                                     </div>
//                                 </div>
//                                 <hr />
//                                 <div class="row">
//                                     <div class="col-sm-3">
//                                         <p class="mb-0">Email</p>
//                                     </div>
//                                     <div class="col-sm-9">
//                                         <p class="text-muted mb-0">example@example.com</p>
//                                     </div>
//                                 </div>
//                                 <hr />
//                                 <div class="row">
//                                     <div class="col-sm-3">
//                                         <p class="mb-0">Phone</p>
//                                     </div>
//                                     <div class="col-sm-9">
//                                         <p class="text-muted mb-0">(097) 234-5678</p>
//                                     </div>
//                                 </div>
//                                 <hr />
//                                 <div class="row">
//                                     <div class="col-sm-3">
//                                         <p class="mb-0">Mobile</p>
//                                     </div>
//                                     <div class="col-sm-9">
//                                         <p class="text-muted mb-0">(098) 765-4321</p>
//                                     </div>
//                                 </div>
//                                 <hr />
//                                 <div class="row">
//                                     <div class="col-sm-3">
//                                         <p class="mb-0">Address</p>
//                                     </div>
//                                     <div class="col-sm-9">
//                                         <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="row">
//                             <div class="col-md-6">
//                                 <div class="card mb-4 mb-md-0">
//                                     <div class="card-body">
//                                         <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
//                                         </p>
//                                         <p class="mb-1" style="font-size: .77rem;">Web Design</p>
//                                         <div class="progress rounded" style="height: 5px;">
//                                             <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
//                                                 aria-valuemin="0" aria-valuemax="100"></div>
//                                         </div>
//                                         <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
//                                         <div class="progress rounded" style="height: 5px;">
//                                             <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
//                                                 aria-valuemin="0" aria-valuemax="100"></div>
//                                         </div>
//                                         <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
//                                         <div class="progress rounded" style="height: 5px;">
//                                             <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
//                                                 aria-valuemin="0" aria-valuemax="100"></div>
//                                         </div>
//                                         <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
//                                         <div class="progress rounded" style="height: 5px;">
//                                             <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
//                                                 aria-valuemin="0" aria-valuemax="100"></div>
//                                         </div>
//                                         <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
//                                         <div class="progress rounded mb-2" style="height: 5px;">
//                                             <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
//                                                 aria-valuemin="0" aria-valuemax="100"></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-md-6">
//                                 <div class="card mb-4 mb-md-0">
//                                     <div class="card-body">
//                                         <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
//                                         </p>
//                                         <p class="mb-1" style="font-size: .77rem;">Web Design</p>
//                                         <div class="progress rounded" style="height: 5px;">
//                                             <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
//                                                 aria-valuemin="0" aria-valuemax="100"></div>
//                                         </div>
//                                         <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
//                                         <div class="progress rounded" style="height: 5px;">
//                                             <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
//                                                 aria-valuemin="0" aria-valuemax="100"></div>
//                                         </div>
//                                         <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
//                                         <div class="progress rounded" style="height: 5px;">
//                                             <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
//                                                 aria-valuemin="0" aria-valuemax="100"></div>
//                                         </div>
//                                         <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
//                                         <div class="progress rounded" style="height: 5px;">
//                                             <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
//                                                 aria-valuemin="0" aria-valuemax="100"></div>
//                                         </div>
//                                         <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
//                                         <div class="progress rounded mb-2" style="height: 5px;">
//                                             <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
//                                                 aria-valuemin="0" aria-valuemax="100"></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     )
// }

// export default Profile

import imag0 from '../Images/Ranks/1.jpg'
import React,{ useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const imag=imag0;
    const titles={ 0: 'white',1: 'grey',2: 'yellow',3: 'green',4: 'blue',5: 'red',6: 'black' }
    const navigate=useNavigate();
    const [name,setName]=useState("none");
    const [username,setUsername]=useState("none");
    const [title,setTitle]=useState(0);
    const fetchDetails=async () => {
        try {
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
                setTitle(userData?.Title);
            } else {
                console.log("Failed to fetch user!!");
                navigate("/login");
            }
        } catch (error) {
            console.error(error);
        }
    }
    const logout=() => {
        try {
            localStorage.setItem('authToken',"");
            localStorage.setItem('timeStamp',"");
            console.log("Logout Successful!!");
            navigate("/login");
        } catch (error) {
            console.error("Logout Failed!!!");
        }
    }
    useEffect(() => {
        // to fetch details of current user
        fetchDetails();
    },[])
    return (
        <section style={{ backgroundColor: '#eee' }}>
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb" className="bg-body-tertiary rounded-3 p-3 mb-4">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">User</a></li>
                                <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                    className="rounded-circle img-fluid" style={{ width: '150px' }} />
                                <h5 className="my-3">{name}</h5>
                                <p className="text-muted mb-1">{titles[title]}</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary">Follow</button>
                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary ms-1">Message</button>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4 mb-lg-0">
                            <div className="card-body p-0">
                                <ul className="list-group list-group-flush rounded-3">
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fas fa-globe fa-lg text-warning"></i>
                                        <p className="mb-0">https://mdbootstrap.com</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-github fa-lg" style={{ color: '#333333' }}></i>
                                        <p className="mb-0">mdbootstrap</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }}></i>
                                        <p className="mb-0">@mdbootstrap</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }}></i>
                                        <p className="mb-0">mdbootstrap</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }}></i>
                                        <p className="mb-0">mdbootstrap</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Full Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">Johnatan Smith</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">example@example.com</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Phone</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">(097) 234-5678</p>
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
                                        <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                        </p>
                                        <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                                        <div className="progress rounded" style={{ height: '5px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80"
                                                aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                                        <div className="progress rounded" style={{ height: '5px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="72"
                                                aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                                        <div className="progress rounded" style={{ height: '5px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow="89"
                                                aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                                        <div className="progress rounded" style={{ height: '5px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="55"
                                                aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                                        <div className="progress rounded mb-2" style={{ height: '5px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow="66"
                                                aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card mb-4 mb-md-0">
                                    <div className="card-body">
                                        <img src={imag} alt="avatar" style={{ width: '200px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;
