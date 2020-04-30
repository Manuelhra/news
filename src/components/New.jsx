import React from 'react'
import PropTypes from 'prop-types';

const New = ({ notice }) => {

  const { urlToImage, url, title, description, source} = notice;

  return (
    <div className="col s12 m6 14">
      <div className="card">
        <div className="card-image">
          <img src={urlToImage} alt={title} />
          <span className="card-title">{source.name}</span>
        </div>

        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="card-action">
          <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="waves-effect waves-light btn"
          >Ver noticia completa</a>
        </div>
      </div>
    </div>
    );
}

New.propTypes = {
  notice: PropTypes.object,
};
 
export default New;