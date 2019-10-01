import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div id="contact" className='contact-container'>
        <div style={{display: 'flex',
        justifyContent: 'center',
        fontSize: '24px',
        letterSpacing: '3px'}}>CONTACT</div>
        <div style={{margin: '20px 60px 35px 60px', letterSpacing: '1px'}}>
        Want to work together? Have feedback or questions about my work? Just want to say hi?
        </div>
        <div style={{margin: '20px 60px 35px 60px', letterSpacing: '1px'}}>
        Shoot me an email!       
        </div>
        <h1 style={{margin: '20px 60px 35px 60px'}}>stcoates8@gmail.com</h1>
        <div style={{margin: '20px 60px 35px 60px', letterSpacing: '1px'}}>
       And while you're here, let's connect on <a href="https://www.linkedin.com/in/stephanie-coates/" target="_blank" rel="noopener noreferrer" style={{color: '#aab39d'}}>LinkedIn</a>.
        </div>
      
   </div>
    )
}

export default Contact;