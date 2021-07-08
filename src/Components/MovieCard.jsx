import React from 'react'
const MovieCard = ({ movie }) => {

    return (
        <div style={{border:'red solid'}}>
            <h1>{movie.title}</h1>
            <h3>{movie.description}</h3>
            <a href={movie.posterUrl}>link</a>
            <h2>{movie.rating}</h2>
        </div >
    )
}

export default MovieCard
