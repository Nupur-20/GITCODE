import React from "react"
import PropTypes from "prop-types"

function Contact(props) {
    return (
        <section id="contact">
            <div class="contact container">
                <div>
                    {/* <h1 class="section-title">
            Contact <span>info</span>
          </h1> */}
                </div>
                <div class="contact-items">
                    <div class="contact-item">
                        <div class="icon">
                            <img src="https://img.icons8.com/bubbles/100/000000/phone.png" />
                        </div>
                        <div class="contact-info">
                            <h1>Phone</h1>
                            <h2>+91 XXXXX XXX89</h2>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                            <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" />
                        </div>
                        <div class="contact-info">
                            <h1>Email</h1>
                            <h2>abc123@gmail.com</h2>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                            <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" />
                        </div>
                        <div class="contact-info">
                            <h1>Address</h1>
                            <h2>New Delhi, India</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

Contact.propTypes={}

export default Contact
