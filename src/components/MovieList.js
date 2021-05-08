import React from 'react'

const MovieList = (props) => {
    return (
        <div>
            {props.movies.map((movie, index) => 
                <div key={index}>
                    <h1>{movie.Title}</h1>
                    <h4>{movie.Year}</h4>
                </div>
             )}
        </div>
    )
}

export default MovieList
