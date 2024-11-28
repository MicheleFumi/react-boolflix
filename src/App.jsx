import 'bootstrap-icons/font/bootstrap-icons.css';
import { useMovieContext } from './Context/MyContextData'; // Importa il contesto
import './app.css';
import Flag from 'react-country-flag';


export default function App() {
  const { movies, searchQuery, setSearchQuery, fetchMovies, series, fetchSeries, } = useMovieContext();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchMovies(searchQuery);
    fetchSeries(searchQuery)
  };

  const ratingStars = (rating) => {
    let stars = []
    for (let i = 0; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className='bi bi-star-fill'></i>)
      } else {
        stars.push(<i key={i} className='bi bi-star'></i>)
      }

    }
    return stars;
  }

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


      <h2>film</h2>
      <div>
        {movies.length > 0 ? (
          <ul>
            {movies.map((movie) => {
              const rating = Math.ceil(movie.vote_average / 2)
              let countryCode = movie.original_language.toUpperCase();

              // Gestione delle eccezioni per lingue specifiche
              if (countryCode === 'EN') {
                countryCode = 'US'; // Inglese -> Regno Unito
              } else if (countryCode === 'ZH') {
                countryCode = 'CN'; // Cinese -> Cina
              } else if (countryCode === 'JA') {
                countryCode = 'JP'; // Giapponese -> Giappone
              } else if (countryCode === 'KO') {
                countryCode = 'KR';
              }

              return (


                <li key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />

                  <h3>Titolo: {movie.title}</h3>
                  <p>Titolo Originale: {movie.original_title}</p>
                  <Flag countryCode={countryCode} style={{ width: 50, height: 50 }} />
                  <p>
                    Voto: {ratingStars(rating)}
                  </p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Nessun film trovato.</p>
        )}
      </div>

      {/* Mostriamo le serietv */}
      <h2>serie tv</h2>
      <div>
        {series.length > 0 ? (
          <ul>
            {series.map((serie) => {
              let countryCode = serie.original_language.toUpperCase();

              // Gestione delle eccezioni per lingue specifiche
              if (countryCode === 'EN') {
                countryCode = 'US'; // Inglese -> Regno Unito
              } else if (countryCode === 'ZH') {
                countryCode = 'CN'; // Cinese -> Cina
              } else if (countryCode === 'JA') {
                countryCode = 'JP'; // Giapponese -> Giappone
              } else if (countryCode === 'KO') {
                countryCode = 'KR';
              }

              return (
                <li key={serie.id}>
                  <img src={`https://image.tmdb.org/t/p/w300/${serie.poster_path}`} alt="" />
                  <h3>Titolo: {serie.original_name}</h3>
                  <Flag countryCode={countryCode} style={{ width: 50, height: 50 }} />
                  <p>Voto: {serie.vote_average}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Nessuna serie trovata.</p>
        )}
      </div>

    </div>



  );
}
