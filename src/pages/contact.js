import React from 'react';
import Navbar from '../components/navbar';

const Contact = () => {
  return (
    <React.Fragment>
      <Navbar activeClass="site-navigation site-navigation__secondary"/>
      <div className="contact container">
        <h1 className="contact__title">Get in touch<span className="red-dot">.</span></h1>
        <p className="contact__description">Please, fill out a short form or send us an email</p>
        <p className="contact__description">Email: <a className="contact__mail" href="mailto:contact@heyU.h">contact@heyU.h</a></p>
        <div className="form-container col">
          <form className="form" action="">
            <label htmlFor="name" hidden="true">Name</label>
            <input className="input" type="text" placeholder="Name" name="name" required/>
            <label htmlFor="email" hidden="true">Email</label>
            <input className="input" type="email" name="email" id="" placeholder="Email" required/>
            <label htmlFor="number" hidden="true">Phone number</label>
            <input className="input" type="tel" placeholder="123-456-789" name="number" id="" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"/>
            <label htmlFor="message" hidden="true">Message</label>
            <textarea name="message" id="" cols="30" rows="10" className="textarea" placeholder="Message"></textarea>
            <button type="submit" className="btn" role="button" aria-hidden="false" aria-label="submit form button">Submit</button>
          </form>
        </div>
      </div>
    </React.Fragment>
    
  );
}

export default Contact;