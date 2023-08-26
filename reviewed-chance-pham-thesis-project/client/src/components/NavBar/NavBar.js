
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NavBar = () => (
    <div>
    <header>
        <nav>
            <Link to="/">
                <img src="./assets/images/burgerwiz.png"></img>
            </Link>

            <div id="navigation">
                <ul>
                    <li><Link to="/order" className="text-x-large">Order Now</Link></li>
                        <li><Link to="/history" className="text-x-large history">Our Mission</Link></li>
                        <li><Link to="/contact" className="text-x-large">Contact Us</Link></li>
                        <li><Link to="/pending" className="text-x-large">Pending Orders</Link></li>
                </ul>
            </div>

            <div id="hamburger" className="">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
    <div className="modal-menu">
        <ul>
            <li><a href="/order">Order Now</a></li>
                <li><a href="/history" className="history">Our Mission</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/pending">Pending Orders</a></li>
        </ul>
        </div>

    </div>
)

export default NavBar;