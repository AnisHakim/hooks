import React from 'react';
const MovieCard = ({ movie }) => {
  return (
    <div>
      <h1 style={{ color: 'rgb(64,224,208)' }}>{movie.title}</h1>
      <img
        src={movie.image}
        style={{ width: '300px', height: '200px' }}
        alt='defaultImg'
      />
      <h3 style={{ color: '#00CED1' }}>Description: {movie.description}</h3>
      <a style={{ color: '#C9C9C9' }} href={movie.posterUrl}>
        link
      </a>
      <h2 style={{ color: '#5F9EA0' }}>Rating: {movie.rating}</h2>
    </div>
  );
};

export default MovieCard;
