import React from 'react'
import './Navbar.css'
// import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
    return (
        <div>
            <section className="navigation">
                <div className="nav-container">
                    <div className="brand">
                        <a href="#!">Writix</a>
                    </div>
                    <nav>
                        <div className="nav-mobile">
                            <a id="navbar-toggle" href="#!">
                                <span />
                            </a>
                        </div>
                        <ul className="nav-list">
                            <li>
                                <a href="#!">Home</a>
                            </li>
                            <li>
                                <a href="#!">About</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#!">Services</a>
                                <ul className="navbar-dropdown">
                                    <li>
                                        <a href="#!">Sass</a>
                                    </li>
                                    <li>
                                        <a href="#!">Less</a>
                                    </li>
                                    <li>
                                        <a href="#!">Stylus</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!">Portfolio</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#!">Category</a>
                                <ul className="navbar-dropdown">
                                    <li>
                                        <a href="#!">Sass</a>
                                    </li>
                                    <li>
                                        <a href="#!">Less</a>
                                    </li>
                                    <li>
                                        <a href="#!">Stylus</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>


        </div>
    )
}
