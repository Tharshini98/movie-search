import MovieCard from "./MovieCard";
import TopBar from "./TopBar";

function Search({movies, error, search, setSearch, setType}){
  return(
    <div>
      <TopBar search={search} setSearch={setSearch} setType={setType}/>
      {error ? (<p className="text-red-500">{error}</p>
      ): (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie}/>
          ))}
          </div>
      )}
    </div>
  );
}

export default Search;