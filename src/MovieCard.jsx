import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

function MovieCard({movie}){
  const[favorite, setFavorite] = useState(false);

  useEffect(() => {
    try {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
    const exists = stored.some((m) => m.imdbID === movie.imdbID);
    setFavorite(exists);
  } catch (e) {
    console.error("Failed to parse favorites from localStorage:", e);
    setFavorite(false);
  }
  },[movie.imdbID]);

  const toggleFavorite = (movie) => {
    try {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
    const favorite = stored.som(m => m.imdbID === movie.imdbID);
    let updated;
    if (favorite) {
      updated = stored.filter((m) => m.imdbID !== movie.imdbID);
    } else {
      updated = [...stored, movie];
    }
    localStorage.setItem("favorites", JSON.stringify(updated));
    setFavorite(!favorite);
  } catch (e) {
    console.error("Failed to update favorites in localStorage:", e);
  }

    localStorage.setItem("favorites", JSON.stringify(updated));
    setFavorite(!favorite);
  }

  return(
    <div className="border rounded bg-black shadow p-3 hover:shadow-lg relative">
      <Link to={`/movie/${movie.imdbID}`}>
      <img
      src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x400?text=No+Image"}
      alt={movie.Title}
      className="w-full h-64 object-cover mb-2"/>
      <h2 className="font-bold text-md">{movie.Title}</h2>
      <p className="text-sm text-gray-600">{movie.Year}-{movie.Type}</p>
      </Link>
      <button onClick={toggleFavorite} className="absolute top-2 text-red-700 right-2 text-xl">
         <FontAwesomeIcon icon={favorite ? solidHeart : regularHeart} />
      </button>
    </div>
  )
}

export default MovieCard;