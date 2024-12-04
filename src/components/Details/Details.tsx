import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Details() {
  const history = useHistory();

  const currentMovie = useSelector((store) => store.currentMovie);
  const genres = useSelector(store => store.genres);
  
  return (
    <div>
      <h2>{currentMovie.title}</h2>

      <br />

      <img src={currentMovie.poster} alt={currentMovie.title} />

      <br />

      <p>{currentMovie.description}</p>

      <br />

      {genres && genres.map(genre => {
        return (
            <div key={genre.id}>
                <p>{genre.movie_genre}</p>
            </div>
        );
    })}

      <br />
      <button onClick={() => history.push(`/`)}>back</button>
    </div>
  );
}

export default Details;
