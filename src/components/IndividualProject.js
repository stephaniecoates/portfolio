import React from "react"

const IndividualProject = props => {
  const {
    projectName, 
    projectTech, 
    projectDetails,
    projectGithubLink,
    projectType,
    screenshot,
    screenshotOnRight,
    screenshotOnLeft,
    screenshotAlt,
    screenshotMarginLeft,
    screenshotMarginRight,
    screenshotRelativeToBottom,
    screenshotRelativeToTop,
    descriptionMarginLeft,
    descriptionMarginRight,
    descriptionRelativeToBottom,
    descriptionRelativeToTop,
    boxShadowColor = "#707070"
  } = props
  return (
    <div className="projects-content-section" data-scroll>
      <div className="single-project-container"
        style={{
          height: `100vh`,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
      {/* left screenshot */}
      {screenshotOnLeft && <img
          alt={screenshotAlt}
          src={screenshot}
          width="65%"
          height="60%"
          style={{
            marginLeft: screenshotMarginLeft,
            marginRight: screenshotMarginRight,
            position: "relative",
            top: screenshotRelativeToTop,
            bottom: screenshotRelativeToBottom,
            boxShadow: screenshotOnRight ? "-2px 2px grey" : "2px 2px grey",
          }}
        />}
        {/* info box */}
        <div
          style={{
            height: "65%",
            border: "0.5px solid grey",
            marginRight: descriptionMarginRight,
            marginLeft: descriptionMarginLeft,
            position: "relative",
            top: descriptionRelativeToTop,
            bottom: descriptionRelativeToBottom,
            zIndex: "3",
            backgroundColor: "white",
            boxShadow: screenshotOnRight ? `-12px 12px ${boxShadowColor}` : `12px 12px ${boxShadowColor}`,
          }}
        >
        {/* project-type header */}
          <div
            style={{
              position: "relative",
              color: "grey",
              letterSpacing: "2px",
              bottom: "50px",
              float: screenshotOnLeft ? 'right' : null,
              fontSize: "0.8em",
            }}
          >
            {projectType.toUpperCase()}
          </div>
          {/* inside-box info */}
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', position: 'relative', bottom: '20px', alignItems: 'flex-start', margin: '0px 10px', width: '100%', height: '100%'}}>
         <div>
          <h2 style={{fontSize: '2em', margin: '5px'}}>{projectName}</h2>
          <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '20px', justifyContent: 'flex-start'}}>
          {projectTech.map(tech => <div style={{color: 'black', backgroundColor: 'rgba(138, 155, 127, 0.5)', fontWeight: 'bold', padding: '2px 4px', margin: '2px', textTransform: 'uppercase', borderRadius: '5px', fontSize: '0.5em', letterSpacing: '1px' }}>{tech}</div>)}
          </div>
          {projectDetails.map(detail => <div style={{ fontSize: '0.75em', marginTop: '20px', lineSpacing: '2px', padding: '3px 25px 3px 5px'}}>{detail}</div>)}
          </div>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center', position: 'relative', right: '15px'}}>
         <a href={projectGithubLink} target="_blank" rel="noopener noreferrer"> <button style={{borderRadius: '5px', cursor: 'pointer', color: 'black', backgroundColor: 'rgba(138, 155, 127, 0.5)', padding: '8px 20px', fontSize: '0.7em', fontWeight: 'bold', letterSpacing: '1px'}}>view on github</button></a>
        </div>
        </div>
        </div>
        {screenshotOnRight && 
        <img
          alt={screenshotAlt}
          src={screenshot}
          width="65%"
          height="60%"
          style={{
            marginLeft: screenshotMarginLeft,
            marginRight: screenshotMarginRight,
            position: "relative",
            top: screenshotRelativeToTop,
            bottom: screenshotRelativeToBottom,
            boxShadow: "-2px 2px grey",
          }}
        />}
      </div>
    </div>
  )
}

export default IndividualProject
