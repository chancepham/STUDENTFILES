import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = () => (
    
    <footer>
    <div id="footer" className="container p-5">
    <div className="text-center justify-content-center text-dark p-5"><img height="200px" src="./assets/images/burgerwiz.png"
    alt="Tv head"></img>
    <Link to="/terms">
    <h2 className="h6 text-dark text-uppercase  mb-5">Terms & Conditions</h2>
    </Link>
    
    <div className="mb-5">
    <p>"So Fast and Delicious It's Magical"</p>
    </div>
    <address className="mb-5">
    <ul className="list-unstyled">
    <li className="d-flex justify-content-center mb-3"><i className="fa fa-phone "></i><span>Phone:
    (+123) 456
    7890</span></li>
    <li className="d-flex justify-content-center mb-3"><i className="fa fa-envelope "></i><span>Email:<a
    href="mailto:chancepham@gmail.com">chancepham@gmail.com</a></span></li>
    </ul>
    </address>
    <ul className="list-inline mb-0">
    <li className="list-inline-item"><a className="u-icon-v3 socialIcon  rounded" href="#!"><i
    className="fa fa-twitter"></i></a></li>
    <li className="list-inline-item g-mx-5"><a className="u-icon-v3 socialIcon  rounded" href="#!"><i
    className="fa fa-pinterest"></i></a></li>
    <li className="list-inline-item g-mx-5"><a className="u-icon-v3 socialIcon  rounded" href="#!"><i
    className="fa fa-facebook"></i></a></li>
    <li className="list-inline-item g-mx-5"><a className="u-icon-v3 socialIcon  rounded" href="#!"><i
    className="fa fa-instagram"></i></a></li>
    </ul>
    </div>
    </div>
    
    </footer>
    
    
    )
    
    export default Footer;