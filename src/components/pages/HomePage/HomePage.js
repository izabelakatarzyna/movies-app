import React, { useEffect, useState } from "react";
import { useMoviesData } from "../../../hooks/useMoviesData";
import Movies from "../../Movies/Movies/Movies";
import "swiper/css";
import FeaturedMovie from "./FeaturedMovie/FeaturedMovie";
import Footer from "../../Footer/Footer";
import SearchPage from "../SearchPage/SearchPage";
import MainTemplate from "../../templates/MainTemplate";

const HomePage = () => {
  const { movies: popular, loading, error } = useMoviesData("/movie/popular");
  const { movies: topRated } = useMoviesData("/movie/top_rated");
  const { movies: latest } = useMoviesData("/movie/upcoming");
  const { movies: tvPopular } = useMoviesData("/tv/popular");
  const { movies: tvLatest } = useMoviesData("/tv/top_rated");

  const [featured, setFeatured] = useState();

  useEffect(() => {
    if (featured) return;
    featuredMovie();
  }, [popular]);

  const featuredMovie = () => {
    if (!popular?.results) return;
    console.log(popular.results);
    const result = Math.floor(Math.random() * popular.results.length);
    setFeatured(popular.results[result]);
  };

  return (
    <MainTemplate>
      <Movies portrait title="Popular Movies" movies={popular?.results} />
      {featured ? <FeaturedMovie featured={featured} /> : <p> "Loading"</p>}
      <Movies portrait title="Top Rated" movies={topRated?.results} />
      <Movies portrait title="Upcoming Movies" movies={latest?.results} />
      <Movies isTvShow title="Popular TV Shows" movies={tvPopular?.results} />
      <Movies isTvShow title="Top Rated TV Shows" movies={tvLatest?.results} />
      <Footer />
    </MainTemplate>
  );
};

export default HomePage;
