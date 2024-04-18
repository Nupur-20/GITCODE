import React from "react"
import PropTypes from "prop-types"

function Home(props) {
    return (
        <div className="main-home">
            <div className="home my-3 mx-3">
                <header>
                    <h1 className="heading-float">Welcome to GITCODE</h1>
                </header>
                <div className="content my-5">
                    <main>
                        <section className="mx-1 my-3">
                            <h2>
                                <p>Learn to Code</p>
                                <p>Start your coding journey with our tutorials and resources.</p>
                            </h2>
                        </section>
                        <section className="mx-1 my-3">
                            <h2>
                                <p>Practice Coding</p>
                                <p>Test your skills with coding challenges and exercises.</p>
                            </h2>
                        </section>
                        <section className="mx-1 my-3">
                            <h2>
                                <p>Connect with Developers</p>
                                <p>Join our community to collaborate and learn from others.</p>
                            </h2>
                        </section>
                    </main>
                </div>
                <center>
                    <div className="button">
                        <button type="button" className="btn btn-secondary">
                            Login/SignUp
                        </button>
                    </div>
                </center>
            </div>
            <footer>
                <center>
                    <div className="testimonials mx-3 my-3">
                        <section className="testimonials">
                            <h2>What Our Users Say</h2>
                            <div className="testimonial">
                                <p>"This website has been a game-changer for me in my coding journey."</p>
                                <p className="author">- John Doe</p>
                            </div>
                            <div className="testimonial">
                                <p>"I've learned so much from the tutorials and the supportive community here."</p>
                                <p className="author">- Jane Smith</p>
                            </div>
                        </section>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Coding Website</p>
                    </div>
                </center>
            </footer>
        </div>
    )
}

Home.propTypes={}

export default Home
