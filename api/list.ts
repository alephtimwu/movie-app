import axios from 'axios';
import { API_HOST, API_PROTOCOL, API_KEY } from '../constants/index';

interface GetMovieListParams {
  s?: string;
  type?: string;
  callback?: (data) => void;
}

export const getMovieList = async (params: GetMovieListParams) => {
  const { s, type, callback } = params;
  const res = await axios.get(
    `${API_PROTOCOL}${API_HOST}/?apikey=${API_KEY}&s=${s}&type=${type}&page=1`
  );
  if (callback && res.data.Search) {
    callback(res.data.Search);
  }
};
