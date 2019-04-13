import React from 'react';

const Download = (props) => {
  return (
    <div className="download">
      <img src={props.image} alt="HeyU app logo" className="download__image"/>
      <h3 className="download__title">Download the app<span className="red-dot">.</span></h3>
      <p className="download__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
      sed do eiusmod tempor incididunt ut labore et.</p>
      <img src={props.button} alt="app store button" className="download__image"/>
    </div>
  )
}

export default Download;