import React from "react";
import { useMoviesData } from "../../../hooks/useMoviesData";

const HomePage = () => {
  const { movies, loading, error } = useMoviesData("/popular");

  console.log(movies, loading, error);
  return (
    <div>
      {movies.map((movie) => (
        <p key={movies.id}>{movies.title}</p>
      ))}
    </div>
  );
};

export default HomePage;
