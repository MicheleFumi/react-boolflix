// MyContextData.js
import React, { createContext, useState, useContext, } from 'react';
const apiKey = import.meta.env.VITE_API_KEY;
// Crea il contesto
export const MovieContext = createContext();

export const useMovieContext = () => {
    return useContext(MovieContext);  // Restituiamo il valore del contesto
};

export const MovieProvider = ({ children }) => {
    // 1. Stato per la lista dei film trovati
    const [movies, setMovies] = useState([]);

    // 2. Stato per la query di ricerca
    const [searchQuery, setSearchQuery] = useState('');

    // 3. Stato per gestire gli errori
    const [error, setError] = useState(null);

    // 4. Funzione per effettuare la ricerca dei film
    const fetchMovies = (query) => {

        console.log("API Key:", apiKey);

        /*  const apiKey = process.env.REACT_APP_API_KEY;   */// Aggiungi qui la tua API Key
        const url = `https://api.themoviedb.org/3/search/movie?&api_key=${apiKey}&query=${query}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);  // Aggiorna la lista dei film
                setError(null);  // Resetta eventuali errori
            })
            .catch((err) => {
                setError('Errore durante la ricerca dei film');  // Gestione degli errori
                console.error(err);
            });
    };

    // 5. Il Provider fornisce i dati e le funzioni ai componenti figli
    return (
        <MovieContext.Provider value={{ movies, searchQuery, setSearchQuery, fetchMovies, error }}>
            {children}
        </MovieContext.Provider>
    );
};
