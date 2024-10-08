import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailorVideo } from "../utils/movieSlice";
import { useEffect } from "react";


export const useMovieTrailor =(movieId)=>{
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',
            API_OPTIONS
        )
        const json = await data.json();
        console.log(json);
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailorVideo(trailer))
    }

    useEffect(() => {
        getMovieVideos();
    }, []);
}