import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">GitCode</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-5">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item mx-5">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li> */}
                            <li className="nav-item mx-5">
                                <Link className="nav-link active" aria-current="page" to="/practice">Practice</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                            </li>


                            {/* <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li> */}


                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/profile" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    You
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                    <li><Link className="dropdown-item" to="/problems">Problems</Link></li>
                                    <li><Link className="dropdown-item" to="/addproblem">AddProblem</Link></li>
                                </ul>
                            </li>


                            {/* <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li> */}


                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes={

}

export default Navbar