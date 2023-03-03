import React from "react";
import MovieCard from "../MoviesCard/MovieCard";
import MoviesCardPortrait from "../MoviesCardPortrait/MoviesCardPortrait";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import * as Styled from "./Styles";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

const Movies = ({ movies, title, portrait, isTvShow }) => {
  return (
    <div>
      <Styled.Wrapper>
        <Styled.Title>{title}</Styled.Title>

        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: portrait ? 6500 : 20000,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
            992: {
              width: 992,
              slidesPerView: 3,
            },
          }}
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              {portrait ? (
                <MoviesCardPortrait isTvShow={isTvShow} movie={movie} />
              ) : (
                <MovieCard isTvShow={isTvShow} movie={movie} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.Wrapper>
    </div>
  );
};

export default Movies;
