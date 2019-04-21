import React from 'react';
import WOW from "wowjs";


class Article extends React.Component {

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render(props){
    return (
      <article className="app-feature">
        <div className="row container">
          <div className="app-feature__col wow slideInLeft" data-wow-offset="50" data-wow-delay="0.25s">
            <h2 className="app-feature__title">{this.props.title}<span className="red-dot">.</span></h2>
            <p className="app-feature__text">{this.props.text}</p>
          </div> 
          <div className="app-feature__col">
            <img src={this.props.image} alt={this.props.imageAlt} className="app-feature__image"/>
          </div>
        </div>
      </article>
    );
  }
}

export default Article;