import React, { useState } from 'react';
import MovieList from "./Components/MovieList/movieList";
import {moviesData} from "./Components/Constant/data";
import AddMovie from './Components/AddMovie/addMovie';
import './App.css';
import FilterByName from './Components/FilterByName/FilterByName';
import FilterByRate from './Components/Rating/Rating';

function App() {
  const[movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const [rating, setRating] = useState(1);

  const add =(newMovie) => {
    setMovies([...movies,newMovie]);
  };
  return (
    <div className="App">
      <h1>Movie App</h1>
      <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch}/>
      <FilterByRate
      rating={rating}
      setRating={setRating}
      isMovieRating={false}
      />
      <AddMovie add={add}/>
      <MovieList movies ={movies} inputSearch={inputSearch} rating={rating}/>
      

    </div>
  );
}

export default App;
