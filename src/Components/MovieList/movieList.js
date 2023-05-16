import React from "react";
import MovieCard from "../MovieList/MovieCard/MovieCard";
import "./movieList.css";


const MovieList = ({movies, inputSearch, rating}) => {
    return (
        <div>
            <h2> Movies List</h2>
            <div className ='movies'>
                { movies
                .filter ((movie) =>
                movie.title.toUpperCase ().includes( inputSearch.toUpperCase()) &&
                movie.rate >= rating
                )
                
                .map((movie) => (
                <MovieCard movie = {movie} key = {movie.id} />
                ))}
            </div>
        </div>
    )
}

export default MovieList 