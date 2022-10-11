const axios = require('axios').default;

const BASE_URL = `https://api.themoviedb.org/3/`;
const KEY = '2c7b4a4208b8b77d3cb05264c9eb54e5';

export async function getTrending() {
        try {
            const response = await axios.get(
                `${BASE_URL}trending/movie/day?api_key=${KEY}`
            );
            return response.data;
        } catch (error) {
            console.error(error);
        }
};

export async function getMovieById(movie_id) {
      try {
            const response = await axios.get(
                `${BASE_URL}movie/${movie_id}?api_key=${KEY}`
            );
            return response.data;
        } catch (error) {
            console.error(error);
        }
};

export async function getCreditsById(movie_id) {
      try {
            const response = await axios.get(
                `${BASE_URL}movie/${movie_id}/credits?api_key=${KEY}&language=en-US`
            );
            return response.data;
        } catch (error) {
            console.error(error);
        }
};

export async function getReviewsById(movie_id) {
      try {
            const response = await axios.get(
                `${BASE_URL}movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=1`
            );
            return response.data;
        } catch (error) {
            console.error(error);
        }
};

export async function getSearchMovies(query) {
    if(!query){return} 
      try {
            const response = await axios.get(
                `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1`
            );
            return response.data;
        } catch (error) {
            console.error(error);
        }
};
