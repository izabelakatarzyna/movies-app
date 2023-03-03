import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMoviesData } from "../../../hooks/useMoviesData";
import * as Styled from "./Styles";

const MoviePage = () => {
  const params = useParams();
  const {
    movies: movie,
    loading,
    error,
  } = useMoviesData(`/movie/${params.id}`);
  console.log(movie);

  if (!movie) return;
  return (
    <Styled.Wrapper>
      <Styled.Text>
        <h2>{movie.original_title}</h2>
        <Styled.Subtitle>{movie.overview}</Styled.Subtitle>
        <Styled.Rating>
        <Styled.VoteRating>
          <p>Vote rating </p>
          <span>{movie.vote_average}</span>
        </Styled.VoteRating>
        <Styled.VoteCount>
          {" "}
          <p>Vote count </p>
          <span>{movie.vote_count}</span>
        </Styled.VoteCount>
      </Styled.Rating>
      </Styled.Text>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />

    </Styled.Wrapper>
  );
};

export default MoviePage;
