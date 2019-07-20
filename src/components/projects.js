import React from "react"
import "./projects.css"

const Projects = () => {
  return (
    <div>
      <div className="projects-header">PROJECTS</div>
      <div className="projects-container">
        <div className="projects-content-section" data-scroll>
          <img
            alt="project graphic"
            className="project-img"
            src="https://source.unsplash.com/random/1000x1000"
          />
        </div>

        <div className="projects-content-section" data-scroll>
          <img
            alt="project graphic"
            className="project-img"
            src="https://source.unsplash.com/random/1000x1000"
          />
        </div>

        <div className="projects-content-section" data-scroll>
          <img
            alt="project graphic"
            className="project-img"
            src="https://source.unsplash.com/random/1000x1000"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
