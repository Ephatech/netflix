import React, { useEffect, useState } from 'react';
import './Banner.css'
import axios from '../axios'
import requests from '../request'

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.originals);
            setMovie(
                request?.data.results[Math.floor(Math.random() * request.data.results.length)]
            );
            return request;
        }
        fetchData();
    },[]);

    // console.log(movie);

    function truncate(str, n){
        return str?.length > n ?str.substr(0, n-1) + "..." : str;
    }

    return (
        <div className='banner'
        style={{
            backgroundSize : "cover",
            backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition : "center center",
        }}>
        <div className='banner-contents'
        >
            <div className='banner-title-wrapper'>
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
            </div>
            <div className='buttons-wrapper'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <div className='desc-wrapper'>
                <p>{truncate(movie?.overview, 100)}</p>
            </div>
        </div>
        <div className='fade'></div>
        </div>
    );
}

export default Banner;
