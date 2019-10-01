import React from "react"
import "./projects.css"
import BackpactScreenshot from "./../../content/assets/images/backpact/slide1.png"
import ProtocolScreenshot from "./../../content/assets/images/protocol/adminemergencydash.png"
import PortfolioScreenshot from "./../../content/assets/images/portfolio/infinitymirror.jpg"
import IndividualProject from './IndividualProject'


const Projects = () => {
  return (
    <div>
      <div id="projects" className="projects-header">PROJECTS</div>
      <div className="projects-container">
       <IndividualProject
       projectName="Backpact"
       projectTech={['Javascript', 'React', 'Redux', 'Node.js', 'Express.js', 'Massive.js', 'PostgreSQL', 'Axios', 'Bcrypt', 'node-cron', 'Twilio', 'Twiml', 'Nodemailer', 'Moment.js', 'styled-components']}
       projectDetails={["Backpact is a responsive trip planning tool & alert system to keep hikers safe in the backcountry. It allows hikers to browse resources, review a trip checklist, set up an alert that will text and email the hiker's designated contact with the full trip itinerary if he/she doesn't return by the expected end date."]}
       projectGithubLink="https://github.com/stephaniecoates/backpact"
       projectType="Fullstack Web App"
       screenshotOnRight
       screenshot={BackpactScreenshot}
       screenshotAlt="backpact website screenshot"
       screenshotMarginLeft="0px"
       screenshotMarginRight="45px"
       descriptionMarginLeft="45px"
       descriptionMarginRight="-75px"
       descriptionRelativeToBottom="0px"
       descriptionRelativeToTop="10%"
       screenshotRelativeToBottom="10px"
       screenshotRelativeToTop="0px"
       />
       <IndividualProject
       projectName="Protocol"
       projectTech={['Javascript', 'React', 'Redux', 'Node.js', 'Express.js', 'Socket.io', 'Massive.js', 'PostgreSQL', 'Axios', 'Bcrypt', 'Twilio', 'Moment-timezone', 'SCSS']}
       projectDetails={["Protocol is an emergency response tool that allows administrators and staff to follow tailored protocols and communicate in real-time during an active emergency. "]}
       projectGithubLink="https://github.com/Protocol-App/protocol"
       projectType="Fullstack Web App"
       screenshotOnLeft
       screenshot={ProtocolScreenshot}
       screenshotAlt="protocol website screenshot"
       screenshotMarginLeft="45px"
       screenshotMarginRight="0px"
       descriptionMarginLeft="-75px"
       descriptionMarginRight="45px"
       descriptionRelativeToBottom="0px"
       descriptionRelativeToTop="10%"
       screenshotRelativeToBottom="10px"
       screenshotRelativeToTop="0px"
       />
      <IndividualProject
       projectName="My Portfolio"
       projectTech={['Javascript', 'Gatsby', 'React', 'Contentful', 'Netlify']}
       projectDetails={[`Welcome to my corner of the internet. This is my home base to showcase recent projects, blog about programming, and connect and collaborate with others.`]}
       projectGithubLink="https://github.com/stephaniecoates/portfolio"
       projectType="JAMStack Web App"
       screenshotOnRight
       screenshot={PortfolioScreenshot}
       screenshotAlt="infinite mirror"
       screenshotMarginLeft="0px"
       screenshotMarginRight="45px"
       descriptionMarginLeft="45px"
       descriptionMarginRight="-75px"
       descriptionRelativeToBottom="0px"
       descriptionRelativeToTop="10%"
       screenshotRelativeToBottom="10px"
       screenshotRelativeToTop="0px"
       />
      </div>
    </div>
  )
}

export default Projects
