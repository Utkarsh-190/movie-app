import React, { createContext, useState } from "react";

const MovieContext = createContext({
  movieList: [],
  setMovieList: () => {},
});

export function MovieContextProvider(props) {
  const [movieList, setMovieList] = useState([]);

  const context = {
    movieList,
    setMovieList,
  };

  return (
    <MovieContext.Provider value={context}>
      {props.children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
