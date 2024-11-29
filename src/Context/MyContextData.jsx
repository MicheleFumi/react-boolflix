
import { createContext, useState, useContext, } from 'react';

const apiKey = import.meta.env.VITE_API_KEY;

export const MovieContext = createContext();

export function useMovieContext() {
    return useContext(MovieContext);
};

export function MovieProvider({ children }) {

    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([])
    const [searchQuery, setSearchQuery] = useState('');


    const fetchMovies = (query) => {

        const url = `https://api.themoviedb.org/3/search/movie?&api_key=${apiKey}&query=${query}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);

            })

    };

    const fetchSeries = (searchQuery) => {

        const url = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${searchQuery}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setSeries(data.results);
                console.log(data);


            })

    };

    return (
        <MovieContext.Provider value={{ movies, searchQuery, setSearchQuery, fetchMovies, series, fetchSeries, }}>
            {children}
        </MovieContext.Provider>
    );
};
