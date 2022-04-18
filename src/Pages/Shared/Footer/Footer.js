import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed bg-primary text-white mt-5">

                <div className="footer-left">

                    <h3>Travel Guide<span> Agency</span></h3>

                    <p className="footer-links">
                    <Nav.Link style={{padding:'0'}} as={Link} eventKey={1} to="/">Home</Nav.Link>

                    <Nav.Link style={{padding:'0'}} as={Link} eventKey={2} to="/services">Services</Nav.Link>

                    <Nav.Link style={{padding:'0'}} as={Link} eventKey={3} to="/blogs">Blogs</Nav.Link>

                    <Nav.Link style={{padding:'0'}} as={Link} eventKey={4} to="/about">About Me</Nav.Link>

                    <Nav.Link style={{padding:'0'}} as={Link} eventKey={5} to="/contact">Contact</Nav.Link>
                    </p>

                    <p className="footer-company-name text-white"> Travel Guide Agency © {new Date().getFullYear()}</p>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>333 ,Maluher</span> Banaripara, Barishal</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+1.555.555.5555</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a className="text-white " href="mailto:support@company.com">support@travelguideagency.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about text-white">
                        <span>About the company</span>
                        We’re on a journey to transform ordinary trips into extraordinary ones. We are your guide, bringing you personal experiences. Wherever your travels take you, we’ll show you the unique and unmissable things to do in your destination.
                    </p>

                    <div className="footer-icons">

                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-github"></i></a>

                    </div>

                </div>

            </footer>
        </div>
    );
}

export default Footer;