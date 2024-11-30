import { getAllMovies } from './api/movies'; // Import the API function
import MovieCard from '@/components/MovieCard';
import Results from '@/components/Results';
import { useState } from 'react';


export default async function Home() {

  const data = await getAllMovies(); 

  //console.log(data)

  
  return (   
      <Results data ={data}/>
  );
}
