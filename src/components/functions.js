import React from 'react';
import WOW from "wowjs";


class Functions extends React.Component {

  componentDidMount() {
    const wow = new WOW.WOW({ live: false });   
    wow.init();
  }

  render(props){
    return (
      <div className="app-functions">
        <div className="row container">
          <div className="app-functions__col">
            <div className="app-functions__box wow fadeIn" data-wow-delay="0.25s">
              <div className="app-functions__box__header">
                <h3 className="app-functions__title">Start conservation</h3>
                <p className="app-functions__description">Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
              </div>
              <img src={this.props.images[0]} alt="conversation icon" className="app-functions__icon"/>
              
            </div>
  
            <div className="app-functions__box wow fadeIn" data-wow-delay="0.5s">
              <div className="app-functions__box__header">
                <h3 className="app-functions__title">Make a free call</h3>
                <p className="app-functions__description">Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
              </div>
              <img src={this.props.images[2]} alt="telephone icon" className="app-functions__icon"/>
            </div>
          </div>
  
          <div className="app-functions__smartphone">
            <img src={this.props.images[4]} alt="smartphone with homescreen of HeyU app" className="app-functions__image"/>
          </div>
  
          <div className="app-functions__col">
            <div className="app-functions__box wow fadeIn" data-wow-delay="0.75s">     
              <div className="app-functions__box__header app-functions__box__header--reverse">
                <h3 className="app-functions__title">Take a picture</h3>
                <p className="app-functions__description app-functions__description--reverse">Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
              </div>
              <img src={this.props.images[1]} alt="camera icon" className="app-functions__icon"/>
              
            </div>
            <div className="app-functions__box wow fadeIn" data-wow-delay="1s">
              <div className="app-functions__box__header app-functions__box__header--reverse">
                <h3 className="app-functions__title">Send your video</h3>
                <p className="app-functions__description">Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit.</p>
              </div>
              <img src={this.props.images[3]} alt="" className="app-functions__icon"/>
              
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Functions;