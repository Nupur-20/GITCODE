import React from "react"
import PropTypes from "prop-types"

function Contact(props) {
    return (
        <section>
            <div class="card text-bg-light border-dark my-5 mx-3">
                <div class="card-header bg-color:{lightskyblue} ">Contact</div>
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
                                        <p class="card-text">+91 96342 98711</p>
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
                                        <p class="card-text">sparsh@123gmail.com</p>
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
        </section>
    )
}

Contact.propTypes={}

export default Contact
