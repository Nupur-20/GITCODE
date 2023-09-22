import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faTwitter,faLinkedin } from "@fortawesome/free-brands-svg-icons"

// function Contact(props) {
const Contact=() => {
    // Define a custom CSS class to increase icon size
    const iconSizeClass="social-icon"
    return (
        <div>
            <div class="card text-bg-light border-dark my-5 mx-3">
                <div class="card-header bg-color:{lightskyblue} "><center>CONTACT-INFO</center></div>
                <div class="card-body">
                    <br />
                    <br />
                    <div class="row my-5 mx-3">
                        <div class="col-sm-4 mb-3 mb-sm-0">
                            <div class="card border-dark mb-3">
                                <center>
                                    <div class="icon">
                                        <img src="https://img.icons8.com/bubbles/100/000000/phone.png" />
                                    </div>
                                    <div class="card-body-1">
                                        <h5 class="card-title">Phone</h5>
                                        <p class="card-text">+91 XXXXX XXX90</p>
                                    </div>
                                </center>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card border-dark">
                                <center>
                                    <div class="icon">
                                        <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" />
                                    </div>
                                    <div class="card-body-2">
                                        <h5 class="card-title">Email</h5>
                                        <p class="card-text">abc@123gmail.com</p>
                                    </div>
                                </center>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card border-dark">
                                <center>
                                    <div class="icon">
                                        <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" />
                                    </div>
                                    <div class="card-body-3">
                                        <h5 class="card-title">Address</h5>
                                        <p class="card-text">New Delhi, India</p>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <center>
                <p>
                    <h3>Follow for more details:</h3>
                </p>
                <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className={iconSizeClass} />
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className={iconSizeClass} />
                </a>
                <a href="https://www.linkedin.com/in/akash-sharma-1b4560220/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className={iconSizeClass} />
                </a>
            </center>
        </div>
    )
}

Contact.propTypes={}

export default Contact
