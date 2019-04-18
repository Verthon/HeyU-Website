import React from 'react';

const Newsletter = (props) => {
  return(
    <div className="newsletter">
      <h2 className="newsletter__title">Subscribe to our newsletter<span className="red-dot">.</span></h2>
      <p className="newsletter__text">Subscribe to our email newsletter today to receive updates on the lastest news, 
      tutorials and special offers</p>
      <div className="newsletter__input container">
        <input type="email" placeholder="Email address"/>
        <button className="newsletter__btn" type="submit">Submit</button>
      </div>
    </div>
  );
}

export default Newsletter;