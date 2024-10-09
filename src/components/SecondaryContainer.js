import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movieCards = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMoviesCard = useSelector((store)=>store.movies?.popularMovies);
  const topRatedMoviesCard = useSelector((store)=>store.movies?.topratedMovies);
  const upcomingMoviesCard = useSelector((store)=>store.movies?.upcomingMovies);

  if (movieCards === null)
    return;
 
  
  if (topRatedMoviesCard === null)
    return;
    if(popularMoviesCard === null)
      return;
    if(upcomingMoviesCard === null)
      return;
  return (
    movieCards && (

      <div className='bg-gray-950'>
        <div className='-mt-72 relative z-20'>
          <MovieList title={"Now Playing"} movies={movieCards} />
          <MovieList title={"Trending"} movies={topRatedMoviesCard} />
          <MovieList title={"Popular"} movies={popularMoviesCard} />
          <MovieList title={"Upcoming Movies"} movies={upcomingMoviesCard} />
        </div>

      </div>
    )



  )
}

export default SecondaryContainer