import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularmovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
 


  return (
    <div >
      <Header />
      {/*
      mainContainer
        -videoBackground
        -Video title
      secondaryContainer  
        -movie list
        -movie cards
      */}
      <MainContainer/>
      <SecondaryContainer/>

    </div>
  )
}

export default Browse