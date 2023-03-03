import React from "react";
import * as Styled from "./Styles";

const FeaturedMovie = ({ featured }) => {
  return (
    <div>
      <Styled.Wrapper>
        <Styled.Text>
          <Styled.Title>{featured.title}</Styled.Title>
          <Styled.Subtitle>{featured.overview}</Styled.Subtitle>
          <Styled.Data>{featured.release_date}</Styled.Data>

          <Styled.Rating>
            <Styled.VoteRating>
              <p>Vote rating </p>
              <span>{featured.vote_average}</span>
            </Styled.VoteRating>
            <Styled.VoteCount>
              {" "}
              <p>Vote count </p>
              <span>{featured.vote_count}</span>
            </Styled.VoteCount>
          </Styled.Rating>
        </Styled.Text>
        <img
          src={`https://image.tmdb.org/t/p/w500/${featured.poster_path}`}
          alt={featured.title}
        />
      </Styled.Wrapper>
    </div>
  );
};

export default FeaturedMovie;
