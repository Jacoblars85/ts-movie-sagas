import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieForm from "../MovieForm/MovieForm";
import "./MovieList.css";
import { useHistory } from "react-router-dom";

function MovieList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector((store: any) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const goToDescription = (movie) => {
    dispatch({
      type: "SAGA_FETCH_GENRES",
      payload: movie,
    });

    history.push(`/details`);
  };

  return (
    <main>
      <MovieForm />

      <h1>MovieList</h1>

      <section className="movies">
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <img
                src={movie.poster}
                alt={movie.title}
                onClick={() => goToDescription(movie)}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
