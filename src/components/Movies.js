import React from "react";
import { generatePath } from "react-router-dom";
import { movies } from "../data";
function Movies() {
  const displayMoviedata = movies.map((movie)=>
  {return (
    <div key={movie.title}>
        <h2>{`Name :${movie.title}`}</h2>
        <p>{`Time: ${movie.time}`}</p>
          <h2>Genres</h2>
          <ul>
            {movie.genres.map((genre) =>
            {return(
              <li key={genre}>{genre}</li>
            )     
            })
          }

          </ul>
    </div>    
  )
    
  })
  return <div>
     <h1>Movies Page</h1>
    {displayMoviedata}
  </div>;
}

export default Movies;