import { useEffect, useState } from "react";

import{Link} from "react-router-dom";


function MyList(){
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(stored);
    },[]);

    return(
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">My Favorite Movies</h1>
            {favorites.length === 0 ? (
                <p>No favorites added yet</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {favorites.map((movie) => (
                        <Link to={`/movie/${movie.imdbId}`} key={movie.imdbID} className="border rounded shadow p-2 hover:shadow-lg">
                            <img 
                            src={movie.Poster !== "N/A" ? movie.Poster:"https://via.placeholder.com/300x400?text=No+Image"}
                            alt={movie.Title}
                            className="w-full h-64 object-cover mb-2"/>
                            <h2 className="text-sm font-semibold">{movie.Title}</h2>
                            <p className="text-xs text-gray-600">{movie.Year} - {movie.Type}</p>

                        </Link>
                    ))}
                    </div>
            
            )}
        </div>
    );
}

export default MyList;