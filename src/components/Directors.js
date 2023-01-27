import React from "react";
import { directors } from "../data";
function Directors() {
  const displayDirectors = directors.map((director)=>{
    return(<div key={director.name}>
      <h2>{`Name : ${director.name}`}</h2>
      <h2>Movies:</h2>
      <ul>
        {
          director.movies.map((movie) =>
          {return(
            <li key={movie}>{movie}</li>
          )
              
          })
        }
      </ul>

    </div>)})
  return <div>{/*{code here}*/}
  <h1>Directors Page</h1>
  {displayDirectors}
  </div>;
}

export default Directors;