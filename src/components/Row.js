import React, { useEffect, useState } from 'react';
import './Row.css'
import axios from '../axios'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

    const base_url = "https://image.tmdb.org/t/p/original/";

    const Row = ({title, fetchURL, isLarge}) => {

    const [movies, setMovies] = useState([]);

     const [trailerURL, setTrailerURL] = useState("");

     const opts = {
        height : "390",
        width : "100%",
        playerVars : {
            autoplay : 1,
        },
    };
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            //  console.log(request);
            setMovies(request?.data.results);
            return request;
        }
        fetchData();
    },[fetchURL]);

    // console.log(movies);


    const handleClick = (movie) => {
        if(trailerURL){
            setTrailerURL("");
        }else{
        movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
            //  console.log(url);
            const urlParams = new URLSearchParams(new URL(url).search);
            //  console.log(urlParams);
            setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => 
            console.log(error));
    }
};

    return (
        <div className='row'>
             <h1>{title}</h1>
             <div className='movie'>
                {
                    movies?.map((movie) => (
                        <img
                            onClick={() => handleClick(movie)}
                            className={`movie-poster ${isLarge && "movie-poster-large"}`}

                            src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`}

                            alt={movie.name}
                        />
                    )
                    )
                }
             </div>
             <div style={{padding:"40px"}}>
                {trailerURL && <YouTube videoId={trailerURL} opts={opts}/>}
             </div>
        </div>
    );
}

export default Row;
