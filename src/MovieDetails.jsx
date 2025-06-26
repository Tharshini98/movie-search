import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";

function MovieDetails(){
  const {id} = useParams();
  const[movie, setMovie] = useState(null);
  const[error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=aea928e&i=${id}`)
    .then(res => res.json())
    .then(data => {
      if(data.Response === "True") {
        setMovie(data);
        setError(null);
      } else {
        setError(data.Error);
      }
    })
  },[id]);

  if(error) return <p className="txt-red-500">{error}</p>;
  if(!movie) return <p>Loading</p>;

  return(
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x400?text=No+Image"}
        alt={movie.Title}
        className="w-64 h-auto rounded"/>
        <div>
          <h1 className="text-2xl font-bold mb-2">{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Rating:</strong> {movie.imdbRating}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;