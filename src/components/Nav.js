import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Nav() {

    const cartNumber = useSelector(state => { return state.CartArray.length })

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">E-COM</a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>

                                <li className="nav-item">
                                    <Link to="/addproduct" className="nav-link active">
                                        Add New
                                    </Link>
                                    
                                </li>

                                <Link to="/CartView">
                                <li className="nav-item me-0">
                                        <button type="button" class="btn color position-relative">
                                        Cart <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{cartNumber} <span class="visually-hidden">unread messages</span></span>
                                    </button>
                                    </li>
                                </Link>
                                <li>
                               
                                
                                   
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
        )
}