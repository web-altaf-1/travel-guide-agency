import React from "react";
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed bg-primary text-white">

                <div className="footer-left">

                    <h3>Company<span>logo</span></h3>

                    <p className="footer-links">
                        <a href="#" className="link-1">Home</a>

                        <a href="#">Blog</a>

                        <a href="#">Pricing</a>

                        <a href="#">About</a>

                        <a href="#">Faq</a>

                        <a href="#">Contact</a>
                    </p>

                    <p className="footer-company-name"> Travel Guide Agency © {new Date().getFullYear()}</p>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
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