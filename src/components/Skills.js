import React from 'react'
import './Skills.css'

const Skills = () => {
    return (
        <div className='skills-container'>
        <div style={{display: 'flex',
        justifyContent: 'center',
        fontSize: '24px',
        letterSpacing: '3px'}}>SKILLS</div>
        <div style={{margin: '20px 60px 35px 60px', letterSpacing: '1px'}}>
        My biggest strength as a developer is my ability to <span style={{fontWeight: 'bold'}}>constantly learn and grow</span>. If I don't have experience with something, I pick it up quickly.
        For a baseline, here are languages/technologies I use often:
        </div>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <ul style={{marginBottom: '0px'}}>
            <li>Javascript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Express.js</li>
            </ul>
            <ul style={{marginBottom: '0px'}}>
            <li>GraphQL</li>
            <li>Socket.io</li>
            <li>Git</li>
            <li>HTML5</li>
            <li>CSS3</li>
            </ul>
            <ul style={{marginBottom: '0px'}}>
            <li>Nginx</li>
            <li>Docker</li>
            <li>PostgreSQL</li>
            <li>Styled-components</li>

            </ul>
            </div>
   </div>
    )
}

export default Skills;