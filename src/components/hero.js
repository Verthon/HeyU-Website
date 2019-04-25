import React from 'react';

const Hero = (props) => {
  return (
    <div className="row">
      <div className="container hero">
        <div className="hero__col">
          <h1 className="hero__heading">Simple, safe <span className="new-line">&amp; beautiful.</span></h1>
          <p className="hero__description">With <strong>HeyU</strong>, you'll get fast, simple, secure messaging!</p>
          <button className="hero__btn" role="button" aria-hidden="false" aria-label="Call to action - download">Download now</button>
        </div>
        <div className="hero__col">
          <img src={props.image} alt="Smartphone" className="hero__image"/>
        </div>
      </div>   
    </div>
  );
}

export default Hero;