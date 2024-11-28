import React, { createContext, useState, useEffect, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [moviesData, setMoviesData] = useState(null);

    const http = "https://api.themoviedb.org/3/search/movie";
    const apiKey = "57087ec3c9f252f373c26c5bafb6a920"; // Chiave API pubblica (usa questa solo se consentito)

    const getMovies = () => {
        fetch(`${http}?api_key=${apiKey}&query=`) // Correggi l'URL
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Dovresti vedere i dati in console
                setMoviesData(data.results); // Salva i risultati nello stato
            })
            .catch((error) => {
                console.error("Errore durante la chiamata API:", error);
            });
    };

    useEffect(() => {
        getMovies();
    }, []); // La chiamata avviene una sola volta al montaggio

    return (
        <DataContext.Provider value={{ moviesData }}>
            {children}
        </DataContext.Provider>
    );
};


