import React from 'react'
import MovieCard from '../MovieCard'
import './List.css'
const MovieList = ({ movies }) => {

    return (
        <div className="list">
            {
                movies.map((movie, index) => <div className="movie"><MovieCard key={index} movie={movie}
                /></div>)
            }
        </div>
    )
}

export default MovieList
