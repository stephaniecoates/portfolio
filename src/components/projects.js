import React from "react"
import "./projects.css"
import BackpactScreenshot from "./../../content/assets/images/backpact/slide1.png"
import ProtocolScreenshot from "./../../content/assets/images/protocol/adminemergencydash.png"
import PortfolioScreenshot from "./../../content/assets/images/portfolio/infinitymirror.jpg"


const Projects = () => {
  return (
    <div>
      <div className="projects-header">PROJECTS</div>
      <div className="projects-container">
        {/* BACKPACK PROJECT */}
        <div className="projects-content-section" data-scroll>
          <div
            alt="project graphic"
            className="project-img"
            style={{
              height: `100vh`,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "60%",
                border: "0.5px solid grey",
                marginRight: "-75px",
                marginLeft: "45px",
                position: "relative",
                top: "10%",
                zIndex: "3",
                backgroundColor: "white",
                boxShadow: "-12px 12px grey",
              }}
            >
              <p
                style={{
                  position: "relative",
                  color: "grey",
                  letterSpacing: "2px",
                  bottom: "50px",
                  fontSize: "0.8em",
                }}
              >
                WEB APPLICATION
              </p>
              <p>Backpact</p>
              <p>
                A trip planning tool to keep hikers safe in the backcountry.
              </p>
            </div>
            <img
              alt="backpact website screenshot"
              src={BackpactScreenshot}
              width="65%"
              height="60%"
              style={{
                marginLeft: "0px",
                marginRight: "45px",
                position: "relative",
                bottom: "10px",
                boxShadow: "-2px 2px grey",
              }}
            />
          </div>
        </div>

        {/* PROTOCOL PROJECT */}
        <div className="projects-content-section" data-scroll>
          <div
            alt="project graphic"
            className="project-img"
            style={{
              height: `100vh`,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src={ProtocolScreenshot}
              alt="protocol website screenshot"
              width="65%"
              height="60%"
              style={{
                marginLeft: "45px",
                marginRight: "0px",
                position: "relative",
                bottom: "10px",
                boxShadow: "2px 2px grey",
              }}
            />
            <div
              style={{
                height: "60%",
                border: "0.5px solid grey",
                marginLeft: "-75px",
                marginRight: "45px",
                position: "relative",
                top: "10%",
                zIndex: "3",
                backgroundColor: "white",
                boxShadow: "12px 12px grey",
              }}
            >
                <p
                style={{
                  position: "relative",
                  color: "grey",
                  letterSpacing: "2px",
                  bottom: "60px",
                  float: 'right',
                  fontSize: "0.8em",
                }}
              >
                WEB APPLICATION
              </p>
              <p>Protocol</p>
              <p>
                A trip planning tool to keep hikers safe in the backcountry.
              </p>
            </div>
          </div>

          {/* Portfolio section */}
        </div>
        <div className="projects-content-section" data-scroll>
          <div
            alt="project graphic"
            className="project-img"
            style={{
              height: `100vh`,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "60%",
                border: "0.5px solid grey",
                marginRight: "-75px",
                marginLeft: "45px",
                position: "relative",
                top: "10%",
                zIndex: "3",
                backgroundColor: "white",
                boxShadow: "-12px 12px grey",
              }}
            >
              <p
                style={{
                  position: "relative",
                  color: "grey",
                  letterSpacing: "2px",
                  bottom: "60px",
                  fontSize: "0.8em",
                }}
              >
                WEB APPLICATION
              </p>
              <p>My Portfolio</p>
              <p>
                A trip planning tool to keep hikers safe in the backcountry.
              </p>
            </div>
            <img
              src={PortfolioScreenshot}
              alt="infinity mirror"
              width="65%"
              height="60%"
              style={{
                marginLeft: "0px",
                marginRight: "45px",
                position: "relative",
                bottom: "10px",
                boxShadow: "-2px 2px grey",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// const slideQuery = graphql`

// `

export default Projects
