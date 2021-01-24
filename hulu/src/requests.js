const API_KEY="1627b040a4e484162212e41cbf3fb211";

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_generes=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_generes=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_generes=10749`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_generes=9648`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_generes=878`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&with_generes=37`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_generes=16`,
    fetchTV: `/discover/movie?api_key=${API_KEY}&with_generes=10770`,

};   