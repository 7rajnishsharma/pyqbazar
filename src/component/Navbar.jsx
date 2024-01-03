import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-sm " >
                <div className="container-fluid ">
                    {/* <Link className="navbar-brand" to="/">Home</Link> */}
                    <Link className="navbar-brand" to="/"><img className='navbar-img' src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle fw-600" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cources
                                </a>
                                <ul className="dropdown-menu">
                                    <Link className="dropdown-item" to="/cse">CSE</Link>
                                    <Link className="dropdown-item" to="/">ECE</Link>
                                    <Link className="dropdown-item" to="/">ME</Link>
                                    <Link className="dropdown-item" to="/">CE</Link>
                                    <Link className="dropdown-item" to="/">BCA</Link>
                                    <Link className="dropdown-item" to="/">BBA</Link>
                                    <Link className="dropdown-item" to="/">BJMC</Link>
                                    <Link className="dropdown-item" to="/">LLB</Link>
                                    <Link className="dropdown-item" to="/">LLM</Link>
                                    <Link className="dropdown-item" to="/">MBA</Link>
                                </ul>
                            </li>
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
