const APIKEY = "f7286d576e551e00635e91e19b4b5693";
// const ROOT = "https://api.themoviedb.org/3";
// const TRY = "https://api.themoviedb.org/3/discover/movie?api_key=f7286d576e551e00635e91e19b4b5693&with_genres=35";

const requests = {
    trending : `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    originals : `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    rated : `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    comedy : `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    action : `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    horor : `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    adventure :`/discover/movie?api_key=${APIKEY}&with_genres=12`,
    animation : `/discover/movie?api_key=${APIKEY}&with_genres=16`,
    crime : `/discover/movie?api_key=${APIKEY}&with_genres=80`,
    drama : `/discover/movie?api_key=${APIKEY}&with_genres=18`,
    music : `/discover/movie?api_key=${APIKEY}&with_genres=10402`,
    war : `/discover/movie?api_key=${APIKEY}&with_genres=10752`,
}

export default requests;