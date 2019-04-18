import React from 'react';

const Testimonials = (props) => {
  return (
    <div className="testimonials">
      <h2 className="testimonials__title">What people say<span className="red-dot">.</span></h2>
      <div className="testimonials__wrapper">
        <div className="testimonials__feed">
          <p className="testimonials__text">"This is unbelievable. After using HeyU my business skyrocketed!"</p>
          <strong className="testimonials__owner">Symu.co</strong>
        </div>
        <footer className="testimonials__footer">
          <img src={props.images[0]} alt="Ceo avatar" className="user-avatar"/>
          <div className="user-profile">
            <h3 className="user-profile__title">{props.names[0]}</h3>
            <p className="user-profile__role">{props.roles[0]}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Testimonials;