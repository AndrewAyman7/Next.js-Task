import React from 'react'
import MovieCard from './MovieCard';

const Results = ({ data }: { data: any[] }) => {
  return (
    <main className="p-4">
    <h1 className="text-2xl font-bold">Movies</h1>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.map((movie:any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div> 
      </main>
  )
}

export default Results;