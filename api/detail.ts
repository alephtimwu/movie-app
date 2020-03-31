import axios from 'axios';
import { API_HOST, API_PROTOCOL, API_KEY } from '../constants/index';

interface GetMovieDetailParams {
  i: string;
  callback?: (data) => void;
}

export const getMovieDetail = async (params: GetMovieDetailParams) => {
  const { i, callback } = params;
  const res = await axios.get(
    `${API_PROTOCOL}${API_HOST}/?apikey=${API_KEY}&i=${i}`
  );
  console.log(res.data);
  if (callback) {
    callback(res.data);
  }
};
