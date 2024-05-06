import React from "react"
import PropTypes from "prop-types"

function About(props) {
  return (
    <div className="card3 my-5 mx-3">
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>
      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className="row">
        <div className="column3">
          <div className="card3">
            <img src="/w3images/team1.jpg" alt="Jane" style={{ width: "100%" }} />
            <div className="container3">
              <h2>Jane Doe</h2>
              <p className="title3">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button3">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column3">
          <div className="card3">
            <img src="/w3images/team2.jpg" alt="Mike" style={{ width: "100%" }} />
            <div className="container3">
              <h2>Mike Ross</h2>
              <p className="title3">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button className="button3">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column3">
          <div className="card3">
            <img src="/w3images/team3.jpg" alt="John" style={{ width: "100%" }} />
            <div className="container3">
              <h2>John Doe</h2>
              <p className="title3">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button className="button3">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  )
}

About.propTypes = {}

export default About
