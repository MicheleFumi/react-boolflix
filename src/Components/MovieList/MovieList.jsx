import Flag from 'react-country-flag';
import { useMovieContext } from '../../Context/MyContextData';
export default function () {
    const { movies } = useMovieContext();
    function movieCountryCode(movie) {
        let countryCode = movie.original_language.toUpperCase();
        if (countryCode === 'EN') countryCode = 'US';
        else if (countryCode === 'ZH') countryCode = 'CN';
        else if (countryCode === 'JA') countryCode = 'JP';
        else if (countryCode === 'KO') countryCode = 'KR';


        return (
            <Flag countryCode={countryCode} style={{ width: 30, height: 30 }} />
        )

    }

    const ratingStars = (movie) => {
        const rating = Math.ceil(movie.vote_average / 2);
        let stars = [];
        for (let i = 1; i <= 6; i++) {
            if (i <= rating) {
                stars.push(<i key={i} className="bi bi-star-fill"></i>);
            } else {
                stars.push(<i key={i} className="bi bi-star"></i>);
            }
        }
        return stars;
    };

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
                                    <p className="card-text">Titolo Originale: {movie.original_title}</p>
                                    <p>{movieCountryCode(movie)}</p>
                                    <p>Voto: {ratingStars(movie)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            ))}


        </>


    )
}