import React, { useEffect, useState } from "react";
import MainTemplate from "../../templates/MainTemplate";
import * as Styled from "./Styles";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let debounce = null;
    debounce = setTimeout(() => getData(), 2000);
    return () => clearInterval(debounce);
  }, [query]);

  const getData = async () => {
    const key = process.env.REACT_APP_API_KEY;
    const res =
      await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}
        `);
    const data = await res.json();
    setMovies(data.results);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <MainTemplate>
      <Styled.Wrapper>
        <input
          value={query}
          onChange={handleChange}
          placeholder="Search movie"
        />
        <Styled.Text>
          {!movies.length ? (
            <Styled.Paragraph>Movie not found</Styled.Paragraph>
          ) : (
            movies.map((movie) => <p key={movie.id}>{movie.title}</p>)
          )}
        </Styled.Text>
      </Styled.Wrapper>
    </MainTemplate>
  );
};

export default SearchPage;
