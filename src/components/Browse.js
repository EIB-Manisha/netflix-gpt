import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayingMovies();
 


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