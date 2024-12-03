
import { useMovieContext } from '../../Context/MyContextData';
export default function ({ countryCode, ratingStars }) {
    const { movies } = useMovieContext();

    return (
        <>
            {movies.map(movie => (
                movie.poster_path ? (
                    <div key={movie.id} className="col-6 col-sm-4 col-md-3 col-lg-3 mb-4">
                        <div className="card">
                            <div className="movie-image-wrapper position-relative">
                                <img
                                    src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                                    alt={movie.title}
                                    className="card-img-top movie-image"
                                />
                                <div className="movie-overlay position-absolute w-100 h-100 top-0 start-0 text-white d-flex flex-column justify-content-end p-3">
                                    <h5 className="card-title">{movie.title}</h5>
                                    {movie.title !== movie.original_title && (
                                        <p className="card-text">Titolo Originale: {movie.original_title}</p>
                                    )}
                                    <p>{countryCode(movie.original_language)}</p>
                                    <p>Voto: {ratingStars(movie.vote_average)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            ))}


        </>


    )
}