import React from 'react';


const Article = (props) => {
  return (
    <article className="app-feature">
      <div className="row container">
        <div className="app-feature__col">
          <h2 className="app-feature__title">{props.title}<span className="red-dot">.</span></h2>
          <p className="app-feature__text">{props.text}</p>
        </div> 
        <div className="app-feature__col">
          <img src={props.image} alt={props.imageAlt} className="app-feature__image"/>
        </div>
      </div>
    </article>
  );
}

export default Article;