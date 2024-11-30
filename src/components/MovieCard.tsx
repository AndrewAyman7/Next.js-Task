export default function MovieCard({ movie }: { movie: any }) {
    return (
      <div className="bg-white rounded shadow p-4">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="mt-2 text-lg font-semibold">{movie.title}</h2>
        <p className="text-gray-500">Year: {movie.year}</p>
        <p className="text-gray-500">Story: {movie.plot}</p>
        <p className="text-gray-500">Category: {movie.genre.join(", ")}</p>
        <p className="text-yellow-500">Rating: {movie.rating}</p>
      </div>
    );
  }
  