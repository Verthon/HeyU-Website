import React from "react"
import Navbar from '../components/navbar'

const AboutPage = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="about container">
        <h1 className="about__title">Contact with us</h1>
        <p className="about__description">Please, fill out a short form or send us an email</p>
        <div className="form-container col">
          <form className="form" action="">
            <label htmlFor="name">Name</label>
            <input className="input" type="text" placeholder="Name" name="name" required/>
            <label htmlFor="email" className="label">Email</label>
            <input className="input" type="email" name="email" id="" placeholder="Email" required/>
            <label htmlFor="number" className="label">Phone number</label>
            <input className="input" type="tel" placeholder="123-456-789" name="number" id="" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"/>
            <label htmlFor="message" className="label">Message</label>
            <textarea name="message" id="" cols="30" rows="10" className="textarea"></textarea>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </React.Fragment>
    
  )
}

export default AboutPage;