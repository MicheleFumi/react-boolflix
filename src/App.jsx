import React, { useEffect } from 'react';
import { useMovieContext } from './Context/MyContextData';  // Importa il contesto
import './app.css'
export default function App() {
  const { movies, searchQuery, setSearchQuery, fetchMovies, error } = useMovieContext();
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);  // Aggiorna la query
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();  // Evita il comportamento di default del form
    fetchMovies(searchQuery);  // Fa la ricerca usando la query
  };


  return (
    <div>
      <h1>Ricerca Film</h1>

      {/* Form di ricerca */}
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Cerca un film..."
        />
        <button type="submit">Cerca</button>
      </form>



      {/* Mostriamo i film */}
      <div>
        {movies.length > 0 ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.original_title}</p>
                <p>{movie.original_language}</p>
                <p>Voto: {movie.vote_average}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nessun film trovato.</p>
        )}
      </div>
    </div>
  );
};

