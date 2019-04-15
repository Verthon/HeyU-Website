import React from 'react';

const Hero = (props) => {
  return (
    <div className="hero row">
      <div className="hero__col">
        <h1 className="hero__heading">Simple, safe <span class="new-line">&amp; beautiful.</span></h1>
        <p className="hero__description">With <strong>HeyU</strong>, you'll get fast, simple, secure messaging!</p>
        <button className="hero__btn">Download</button>
      </div>
      <div className="hero__col">
        <img src={props.image} alt="Smartphone" className="hero__image"/>
      </div>
    </div>
  );
}

export default Hero;