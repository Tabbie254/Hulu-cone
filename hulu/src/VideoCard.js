import React from 'react'
import './VideoCard.css'

const base_url = "https://image.tmdb.org/t/p/original/";

function VideoCard({movie}) {
    return (
        <div className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt=""/>
            <p>This is a film about coding</p>
            <h2>movie title</h2>
            <p>Nimber of likes</p>
        </div>
    )
}

export default VideoCard
