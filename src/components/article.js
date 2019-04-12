import React from 'react';


const Article = (props) => {
  return (
    <article className="app-feature">
      <div className="row">
        <h2 className="app-feature__title">{props.title}<span className="red-dot">.</span></h2>
        <p className="app-feature__text">{props.text}</p>
        <img src={props.image} alt={props.imageAlt} className="app-feature__image"/>
      </div>
    </article>
  );
}

export default Article;