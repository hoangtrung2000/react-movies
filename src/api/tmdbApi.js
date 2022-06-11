import axiosClient from './axiosClients';

export const category = {
  movie: 'movie',
  tv: 'tv',
};

export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
};
export const tvType = {
  upcoming: 'upcoming',
  popular: 'popular',
  on_the_air: 'on_the_air',
};

const tmdbApi = {
  getMoviesList: (type, params) => {
    const url = 'movie/' + movieType[type]; // movieType['popular'] > "popular"
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = 'tv/' + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = category[cate] + '/' + id + '/videos';
    return axiosClient.get(url, { params: {} });
  },
  search: (cate, params) => {
    const url = 'search/' + category[cate];
    return axiosClient.get(url, params);
  },
  detail: (cate, id, params) => {
    const url = category[cate] + '/' + id;
    return axiosClient.get(url, params);
  },
  credits: (cate, id) => {
    const url = category[cate] + '/' + id + '/credits';
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate, id) => {
    const url = category[cate] + '/' + id + '/similar';
    console.log(cate, id, url);
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
