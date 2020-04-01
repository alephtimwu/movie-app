import { useState } from 'react';
import constate from 'constate';
import mockMovies from '../constants/movies';
import mockMovie from '../constants/movie';

declare type Movie = {
  Title?: string;
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster?: string;
  Ratings?: any[];
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  Type?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response?: string;
};

const UseContext = ({ initTest = { init: 'init' } }) => {
  // set global state here.
  const [test, setTest] = useState(initTest);
  const [movies, setMovies] = useState<Movie[]>(mockMovies.mock);
  const [series, setSeries] = useState<Movie[]>(mockMovies.mock);
  const [episodes, setEpisodes] = useState<Movie[]>(mockMovies.mock);
  const [movie, setMovie] = useState<Movie>(mockMovie);
  return {
    test,
    setTest,
    movies,
    setMovies,
    movie,
    setMovie,
    series,
    setSeries,
    episodes,
    setEpisodes
  };
};

export default constate(UseContext);
