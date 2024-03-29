import React, { Component } from 'react'


const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar {" "}
                    <span className="badge badge-pill bg-secondary">{props.totalCounters}</span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;