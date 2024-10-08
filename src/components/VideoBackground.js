import React from 'react'
import { useSelector } from 'react-redux';
import { useMovieTrailor } from '../hooks/useMovieTrailor';

const VideoBackground = ({ movieId }) => {
    const trailerData = useSelector((store) => store.movies?.trailerVideo);


    //fetch trailer video
    useMovieTrailor(movieId);



    return (
        <div>
            <iframe
            className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/" + trailerData?.key +"?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
            >
            </iframe>

        </div>
    );
}

export default VideoBackground