import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope as faEnvelopeRegular } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";



const FooterBranding = () => {
  return (
    <div className='footer-branding'>
        <div className="container">
            <div className="flex-row">
                <div className="col-5">
                    <img src="Perfume And Cologne.png" alt="" />
                    <ul className='menu-under-logo'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Store Locator</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-7">
                    <div className="flex-row">
                        <div className="col-4">
                            <h2 className="foot-head">Explore</h2>
                            <ul className="foot-ul">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Return & Exchange Policy</a></li>
                                <li><a href="#">Shipping Information</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <h2 className="foot-head">Dashboard</h2>
                            <ul className="foot-ul">
                                <li><a href="#">My Cart</a></li>
                                <li><a href="#">Order History</a></li>
                                <li><a href="#">Settings</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <h2 className="foot-head">Perfume n Cologne</h2>
                            <ul className="foot-ul flex-li">
                                <li><a href="#"><FontAwesomeIcon icon={faEnvelopeRegular}/>sales@perfumencologne.com</a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faPhone}/> +1 888-531-2552</a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faLocationDot}/>10052 Harwin Drive, Houston TX 77036</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default FooterBranding