import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name: 'movies',
        initialState:{
            nowPlayingMovies:null,
            trailerVideo:null,
            popularMovies:null,
            topratedMovies:null,
            upcomingMovies:null
        },
        reducers:{
            addNowPlayingMovie:(state,action)=>{
                state.nowPlayingMovies = action.payload;

            },
            addTrailorVideo:(state,action)=>{
                state.trailerVideo= action.payload;
            },
            addPopularMovies:(state,action)=>{
                state.popularMovies= action.payload;
            },
            addTopRatedMovies:(state,action)=>{
                state.topratedMovies= action.payload;
            },
            addUpcomingMovies:(state,action)=>{
                state.upcomingMovies= action.payload;
            }

        }
    }
)

export const{addNowPlayingMovie,addTrailorVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;