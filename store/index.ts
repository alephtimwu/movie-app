import { useState } from 'react';
import constate from 'constate';
import mockMovies from '../constants/movies';

const UseContext = ({ initTest = { init: 'init' } }) => {
  // set global state here.
  const [test, setTest] = useState(initTest);
  const [movies, setMovies] = useState(mockMovies.mock);
  return {
    test,
    setTest,
    movies,
    setMovies
  };
};

export default constate(UseContext);
