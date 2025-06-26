import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import TopBar from "./TopBar";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";
import MyList from "./MyList";
import Search from "./Search";

function App(){
  const[search, setSearch] = useState("stranger things");
  const[type, setType] = useState("");
  const[movies, setMovies] = useState([]);
  const[error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=aea928e&s=${search}&type=${type}`)
    .then(res => res.json())
    .then(data => {
      if(data.Response === "True"){
        setMovies(data.Search);
        setError(null);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    });
  },[search,type]);

  return(
    <Routes>
      <Route path ="/" element = {<Search movies={movies} error={error} search={search} setSearch={setSearch} setType={setType} />} />
      <Route path = "/movie/:id" element={<MovieDetails/>} />
      <Route path = "/my-list" element={<MyList/>} />

    </Routes>
  );
}

export default App;